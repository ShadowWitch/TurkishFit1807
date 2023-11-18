import type { Request, Response } from "express";
import { prisma } from "../../config/db";
import { ITipoEjercicios } from "../../types/dbInterfaces.types";
import { errorMessage } from "../../helpers/errorMessage.helper";

// ejercicio/ejercicios-add

export const addTipoEjercicios = async (req: Request, res: Response) => {
  try {
    const { descripcion, nombreTipo }: ITipoEjercicios = req.body;

    const newTipo = await prisma.tBL_TIPOSEJERCICIOS.create({
      data: {
        descripcion,
        nombreTipo,
      },
    });

    return res.json({
      ok: true,
      message: "Cliente creado",
      data: newTipo,
    });
  } catch (error) {
    console.log(error);
    return res.json(errorMessage());
  }
};
