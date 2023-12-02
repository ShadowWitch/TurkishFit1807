import type { Request, Response } from "express";
import { prisma } from "../../config/db";
import { IRoles } from "../../types/roles.types";
import { errorMessage } from "../../helpers/errorMessage.helper";
import { TBL_REL_PERMISOS_ROLES, TBL_ROLES } from "@prisma/client";

interface RequestRolesBody {
  nombre: string;
  descripcion: string;
  permisos: string;
}
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
  const { nombre, descripcion = "N/A", permisos }: RequestRolesBody = req.body;
  const misPermisos: string[] = JSON.parse(permisos);

  try {
    const newRole = await prisma.tBL_ROLES.create({
      data: {
        nombre,
        descripcion,
      },
    });

    if (!newRole) throw new Error("error");

    const dataNew: Omit<TBL_REL_PERMISOS_ROLES, "id">[] = misPermisos.map(
      (e, index) => ({
        id_permiso: e,
        id_role: newRole.id,
      })
    );

    const newRelRolePermisosAll =
      await prisma.tBL_REL_PERMISOS_ROLES.createMany({
        data: dataNew,
      });

    return res.json({
      ok: true,
      message: "Rol creado",
      data: newRelRolePermisosAll,
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
