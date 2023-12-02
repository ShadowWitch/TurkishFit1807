import type { Request, Response } from "express";
import { prisma } from "../../config/db";
import { errorMessage } from "../../helpers/errorMessage.helper";

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

export const getOneUsuarios = (req: Request, res: Response) => {
  return res.json({
    ok: true,
    msg: "prueba",
  });
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
