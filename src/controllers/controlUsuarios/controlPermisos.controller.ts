import type { Request, Response } from "express";
import { IPermisos } from "../../types/permisos.types";
import { prisma } from "../../config/db";

export const getAllPermisos = async (req: Request, res: Response) => {
  try {
    const respDB = await prisma.tBL_PERMISOS.findMany({});

    return res.json({
      ok: true,
      message: "",
      data: respDB,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      ok: false,
      msg: "error",
    });
  }
};

export const getOnePermisos = (req: Request, res: Response) => {
  return res.json({
    ok: true,
    msg: "prueba",
  });
};

export const addPermisos = async (req: Request, res: Response) => {
  const { acciones, nombre, descripcion }: IPermisos = req.body;

  try {
    const respDB = await prisma.tBL_PERMISOS.create({
      data: {
        nombre,
        acciones,
        descripcion,
      },
    });

    if (!respDB) throw new Error("error");

    return res.json({
      ok: true,
      message: "Permiso creado",
      data: respDB,
    });
  } catch (error: any) {
    console.log(error.message);
    return res.json({
      ok: false,
      msg: "error",
      data: null,
    });
  }
};

export const updatePermisos = (req: Request, res: Response) => {
  return res.json({
    ok: true,
    msg: "actualizando cliente",
  });
};

export const deletePermisos = (req: Request, res: Response) => {
  return res.json({
    ok: true,
    msg: "actualizando cliente",
  });
};
