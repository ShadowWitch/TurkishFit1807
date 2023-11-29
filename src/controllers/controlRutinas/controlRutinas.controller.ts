import type { Request, Response } from "express";
import { RunningCodeOptions } from "vm";
import { prisma } from "../../config/db";
import { errorMessage } from "../../helpers/errorMessage.helper";

interface Rutina {
  nombre: string;
}

interface Ejercicio {
  nombre: string;
}

interface RELRutinaEjercicio {
  id_rutina_entrenamiento: string;
  series: string;
  repeticiones: string;
  nombre: string;
}

interface RELClienteRutina {
  id_cliente: string;
  id_rutina: string;
}

export const addRutina = async (req: Request, res: Response) => {
  try {
    const { nombre }: Rutina = req.body;

    const newRutina = await prisma.tBL_RUTINA_ENTRENAMIENTO.create({
      data: {
        nombre,
      },
    });

    if (!newRutina) throw new Error("error");

    return res.json({
      ok: true,
      message: "Rutina creada",
      data: {
        newRutina,
      },
    });
  } catch (error) {
    console.log(error);
    return res.json(errorMessage("Error en la consulta"));
  }
};

export const addEjercicio = async (req: Request, res: Response) => {
  try {
    const { nombre }: Ejercicio = req.body;

    const newEjercicio = await prisma.tBL_EJERCICIO_RUTINA.create({
      data: {
        nombre,
      },
    });

    if (!newEjercicio) throw new Error("error");

    return res.json({
      ok: true,
      message: "Ejercicio creado",
      data: {
        newRutina: newEjercicio,
      },
    });
  } catch (error) {
    console.log(error);
    return res.json(errorMessage("Error en la consulta"));
  }
};

export const addRELEjercicioRutina = async (req: Request, res: Response) => {
  try {
    const {
      id_rutina_entrenamiento,
      repeticiones,
      series,
      nombre,
    }: RELRutinaEjercicio = req.body;

    const newEjercicio = await prisma.tBL_EJERCICIO_RUTINA.create({
      data: {
        nombre,
      },
    });

    const relEjercicioRutina = await prisma.tBL_REL_RUTINA_EJERCICIO.create({
      data: {
        id_rutina_entrenamiento,
        series,
        repeticiones,
        id_ejercicio_rutina: newEjercicio.id,
      },
    });

    if (!relEjercicioRutina) throw new Error("error");

    return res.json({
      ok: true,
      message: "Ejercicio agregado a la rutina",
      data: {
        newRutina: relEjercicioRutina,
      },
    });
  } catch (error) {
    console.log(error);
    return res.json(errorMessage("Error en la consulta"));
  }
};

export const addRELClienteRutina = async (req: Request, res: Response) => {
  try {
    const { id_cliente, id_rutina }: RELClienteRutina = req.body;

    const relClienteRutina = await prisma.tBL_REL_CLIENTE_RUTINA.create({
      data: {
        id_cliente,
        id_rutina,
      },
    });

    if (!relClienteRutina) throw new Error("error");

    return res.json({
      ok: true,
      message: "Rutina asignada al cliente",
      data: {
        newRutina: relClienteRutina,
      },
    });
  } catch (error) {
    console.log(error);
    return res.json(errorMessage("Error en la consulta"));
  }
};

export const getAllRutinas = async (req: Request, res: Response) => {
  try {
    const dataRutinas = await prisma.tBL_RUTINA_ENTRENAMIENTO.findMany({
      include: {
        TBL_REL_CLIENTE_RUTINA: true,
        TBL_REL_RUTINA_EJERCICIO: true,
      },
    });

    return res.json({
      ok: true,
      message: "",
      data: dataRutinas,
    });
  } catch (error) {
    console.log(error);
    return res.json(errorMessage());
  }
};
