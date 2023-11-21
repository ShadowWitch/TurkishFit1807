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
        nombre,
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
      contrasena,
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
      { expiresIn: "2h" }
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
    let token;

    console.log("REQ HEADERS >> ", req.headers.authorization);

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ").at(-1); // Guardar el token
    }

    if (!token) {
      return res.status(200).json({
        ok: false,
        message: "No autenticado.",
      });
    }

    const { respDB } = jwt.verify(
      token,
      enviromentAuth.jwtSecretToken
    ) as IPayload;

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
      id_role,
      imagenPerfil = "",
    }: IRegistrarUsuario = req.body;

    // * Verificar Usuario
    const verificacionUsuario = await prisma.tBL_USUARIOS.findFirst({
      where: {
        OR: [
          {
            nombre: nombre.toLowerCase(),
          },
          {
            correoElectronico: correoElectronico.toLowerCase(),
          },
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
        correoElectronico: correoElectronico,
        id_rel_role: id_role,
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
