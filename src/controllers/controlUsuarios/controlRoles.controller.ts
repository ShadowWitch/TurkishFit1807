import type { Request, Response } from "express";
import { prisma } from "../../config/db";
import { IRoles } from "../../types/roles.types";
import { errorMessage } from "../../helpers/errorMessage.helper";
import { TBL_ROLES } from "@prisma/client";

export const getAllRoles = async (req: Request, res: Response) => {
  try {
    const respDB = await prisma.tBL_REL_PERMISOS_ROLES.findMany({
      include: {
        permisos: true,
        roles: true,
      },
    });

    return res.json({
      ok: true,
      message: "",
      data: respDB,
    });
  } catch (error) {
    console.log(error);
    return res.json(errorMessage());
  }
};

export const getOneRoles = (req: Request, res: Response) => {
  return res.json({
    ok: true,
    msg: "prueba",
  });
};

export const addRoles = async (req: Request, res: Response) => {
  const { nombre, descripcion }: TBL_ROLES = req.body;

  try {
    const respDB = await prisma.tBL_ROLES.create({
      data: {
        nombre,
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

export const updateRoles = (req: Request, res: Response) => {
  return res.json({
    ok: true,
    msg: "actualizando cliente",
  });
};

export const deleteRoles = (req: Request, res: Response) => {
  return res.json({
    ok: true,
    msg: "actualizando cliente",
  });
};
