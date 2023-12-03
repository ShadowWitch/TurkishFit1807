import type { Request, Response } from "express";
import { prisma } from "../../config/db";
import { errorMessage } from "../../helpers/errorMessage.helper";
import { enviarMail } from "../../helpers/enviarEmail";
import bcrypt from "bcrypt";
import { generarContrasena } from "../../helpers/generarContraseña.helper";

export const getAllUsuarios = async (req: Request, res: Response) => {
  try {
    const dataUser = await prisma.tBL_USUARIOS.findMany({
      where: {
        estado: "Activo",
      },
      include: {
        roles: true,
      },
    });

    return res.json({
      ok: true,
      message: "",
      data: dataUser,
    });
  } catch (error: any) {
    console.log(error);
    return res.json(errorMessage());
  }
};

export const recuperarContrasena = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;

    const respUser = await prisma.tBL_USUARIOS.findFirst({
      where: {
        correoElectronico: email,
      },
    });

    if (!respUser) {
      return res.json({
        ok: true,
        message: "Correo enviado",
        data: null,
      });
    }

    const newPassword = generarContrasena(10);
    const contrasenaEncriptada = await bcrypt.hashSync(
      newPassword.toLowerCase(),
      10
    );

    const updatePassword = await prisma.tBL_USUARIOS.update({
      where: {
        id: respUser.id,
      },
      data: {
        contrasena: contrasenaEncriptada,
      },
    });

    if (!updatePassword) throw new Error("Error al actualizar contrasena");

    const respRecuperar = await enviarMail({
      email,
      password: newPassword,
    });

    return res.json({
      ok: true,
      message: "Correo enviado",
      data: null,
    });
  } catch (error: any) {
    console.log(error);
    return res.json(errorMessage());
  }
};

export const inactiveUsuario = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const user = await prisma.tBL_USUARIOS.findFirst({
      where: {
        id,
      },
    });

    if (!user) throw new Error("Usuario no encontrado");

    const dataUser = await prisma.tBL_USUARIOS.update({
      where: {
        id,
      },
      data: {
        estado: "Inactivo",
      },
    });

    return res.json({
      ok: true,
      message: "Usuario desactivado con exito",
      data: dataUser,
    });
  } catch (error: any) {
    console.log(error);
    return res.json(errorMessage(error.message));
  }
};

export const updateRol = async (req: Request, res: Response) => {
  try {
    const { id_rol, id_usuario } = req.body;

    const user = await prisma.tBL_USUARIOS.findFirst({
      where: {
        id: id_usuario,
      },
    });

    if (!user) throw new Error("Usuario no encontrado");

    const dataUser = await prisma.tBL_USUARIOS.update({
      where: {
        id: id_usuario,
      },
      data: {
        id_role: id_rol,
      },
    });

    return res.json({
      ok: true,
      message: "Usuario actualizado con exito",
      data: dataUser,
    });
  } catch (error: any) {
    console.log(error);
    return res.json(errorMessage(error.message));
  }
};

export const getOneUsuarios = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const dataUser = await prisma.tBL_USUARIOS.findFirstOrThrow({
      where: {
        id,
      },
    });

    return res.json({
      ok: true,
      message: "",
      data: dataUser,
    });
  } catch (error: any) {
    console.log(error);
    return res.json(errorMessage());
  }
};

export const updateEmailOrUser = async (req: Request, res: Response) => {
  try {
    const { id, correoElectronico, nombre } = req.body;

    const dataUser = await prisma.tBL_USUARIOS.findFirstOrThrow({
      where: {
        id,
      },
    });

    const updateUser = await prisma.tBL_USUARIOS.update({
      where: {
        id,
      },
      data: {
        correoElectronico,
        nombre,
      },
    });

    return res.json({
      ok: true,
      message: "",
      data: updateUser,
    });
  } catch (error: any) {
    console.log(error);
    return res.json(errorMessage());
  }
};

export const addUsuarios = (req: Request, res: Response) => {
  return res.json({
    ok: true,
    msg: "agregando cliente",
  });
};

export const updateUsuarios = (req: Request, res: Response) => {
  return res.json({
    ok: true,
    msg: "actualizando cliente",
  });
};

export const deleteUsuarios = (req: Request, res: Response) => {
  return res.json({
    ok: true,
    msg: "actualizando cliente",
  });
};
