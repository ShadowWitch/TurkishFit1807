import type { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import { z } from "zod";
import jwt, { Jwt } from "jsonwebtoken";
import { prisma } from "../../config/db";
import { ILoginUsuario, IRegistrarUsuario } from "../../types/usuarios.types";
import { enviromentAuth } from "../../helpers/enviromentAuth.helper";
import { IPayload } from "../../types/typesPayloadUser.types";
import { IRequestPayload } from "../../middlewares/validarJWT.middleware";

export const authLogin = async (req: Request, res: Response) => {
  try {
    const { nombre, contrasena }: ILoginUsuario = req.body;

    const respDB = await prisma.tBL_USUARIOS.findFirst({
      where: {
        nombre: nombre.toLowerCase(),
      },
      include: {
        relPermisosRoles: {
          include: {
            permisos: true,
            roles: true,
          },
        },
      },
    });

    if (!respDB)
      return res.status(200).json({
        ok: false,
        message: "Usuario o contraseña no valido",
        data: null,
        estado: 401,
      });

    const verificarContrasena = await bcrypt.compareSync(
      contrasena.toLowerCase(),
      respDB.contrasena
    );

    if (!verificarContrasena)
      return res.status(200).json({
        ok: false,
        message: "Usuario o contraseña no valido",
        data: null,
        estado: 401,
      });

    respDB.contrasena = ":)"; //* Engañar por molestar... Quitar password

    let token = jwt.sign(
      {
        respDB,
      },
      enviromentAuth.jwtSecretToken,
      { expiresIn: "10h" }
    );

    return res.json({
      ok: true,
      msg: "Logeando",
      data: respDB,
      token,
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const checkAuth = async (req: Request, res: Response) => {
  try {
    let token = req.query.token as never;

    // console.log("REQ HEADERS >> ", req.headers.authorization);
    console.log("TOKEEEEEEN >>> ", token);

    // if (
    //   req.headers.authorization &&
    //   req.headers.authorization.startsWith("Bearer")
    // ) {
    //   token = req.headers.authorization.split(" ").at(-1); // Guardar el token
    // }

    if (!token) {
      return res.status(200).json({
        ok: false,
        message: "No autenticado.",
      });
    }

    const { respDB } = jwt.verify(
      token,
      enviromentAuth.jwtSecretToken
    ) as never;

    return res.json({
      ok: true,
      msg: "Logeando",
      data: respDB,
      token,
    });
    // req.usuario = { ...respDB };
  } catch (error) {
    console.log(error);
  }
};

export const authRegistrar = async (req: Request, res: Response) => {
  try {
    const {
      nombre,
      contrasena,
      correoElectronico,
      id_rel_role,
      imagenPerfil = "",
    }: IRegistrarUsuario = req.body;

    const relRoles = await prisma.tBL_REL_PERMISOS_ROLES.findFirst();
    if (!relRoles) throw new Error("Rel Roles no tiene registros");

    // * Verificar Usuario
    const verificacionUsuario = await prisma.tBL_USUARIOS.findFirst({
      where: {
        OR: [
          {
            nombre: nombre.toLowerCase(),
          },
          // {
          //   correoElectronico: correoElectronico.toLowerCase(),
          // },
        ],
      },
    });

    if (verificacionUsuario)
      return res.status(400).json({
        ok: true,
        message: "Ese usuario o correo ya se encuentra en uso",
        data: null,
      });

    // * Registrar Usuario
    const contrasenaEncriptada = await bcrypt.hashSync(
      contrasena.toLowerCase(),
      10
    );

    const respDB = await prisma.tBL_USUARIOS.create({
      data: {
        nombre: nombre.toLowerCase(),
        contrasena: contrasenaEncriptada,
        correoElectronico: correoElectronico || "rosalesdark@gmail.com",
        id_rel_role: relRoles.id,
      },
    });

    return res.json({
      ok: true,
      message: "Usuario creado",
      data: respDB,
    });
  } catch (error: any) {
    console.log(error);
    return res.json({
      ok: false,
      msg: "error",
      data: null,
    });
  }
};

// TODO: LMOYA luego realizar recuperacion de contrasena por correo...
export const authRecuperacionPassword = (req: Request, res: Response) => {
  return res.json({
    ok: true,
    msg: "Recuperar Contrasena",
    data: null,
  });
};
