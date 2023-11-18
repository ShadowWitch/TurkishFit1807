import type { Request, Response } from "express";
import { prisma } from "../../config/db";
import { IEjercicio, ITipoEjercicios } from "../../types/dbInterfaces.types";
import { errorMessage } from "../../helpers/errorMessage.helper";

//? ejercicio/ejercicios-add

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
      message: "Tipo de Ejercicio creado",
      data: newTipo,
    });
  } catch (error) {
    console.log(error);
    return res.json(errorMessage());
  }
};

export const addEjercicio = async (req: Request, res: Response) => {
  try {
    const { descripcion, id_tipo, imagen, nombre }: IEjercicio = req.body;

    const newEjercicio = await prisma.tBL_EJERCICIO.create({
      data: {
        descripcion,
        nombre,
        id_tipo,
        imagen,
      },
    });

    return res.json({
      ok: true,
      message: "Ejercicio creado",
      data: newEjercicio,
    });
  } catch (error) {
    console.log(error);
    return res.json(errorMessage());
  }
};
