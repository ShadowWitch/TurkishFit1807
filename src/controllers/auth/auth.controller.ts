import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import { z } from "zod";
import jwt, { Jwt } from "jsonwebtoken";
import { prisma } from "../../config/db";
import { ILoginUsuario, IRegistrarUsuario } from "../../types/usuarios.types";
import { enviromentAuth } from "../../helpers/enviromentAuth.helper";

export const authLogin = async (req: Request, res: Response) => {
  try {
    const { nombre, contrasena }: ILoginUsuario = req.body;

    const respDB = await prisma.tBL_USUARIOS.findFirst({
      where: {
        nombre,
      },
    });

    if (!respDB)
      return res.status(401).json({
        ok: true,
        message: "Usuario o contraseña no valido",
        data: null,
      });

    const verificarContrasena = await bcrypt.compareSync(
      contrasena,
      respDB.contrasena
    );

    if (!verificarContrasena)
      return res.status(401).json({
        ok: true,
        message: "Usuario o contraseña no valido",
        data: null,
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
    return res.json({
      ok: false,
      msg: "error",
    });
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
        id_role: id_role,
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
