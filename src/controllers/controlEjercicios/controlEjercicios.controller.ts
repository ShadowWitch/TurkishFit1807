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

export const getAllTipoEjercicios = async (req: Request, res: Response) => {
  try {
    const dataTipoEjercicios = await prisma.tBL_TIPOSEJERCICIOS.findMany({
      include: {
        ejercicios: true,
      },
    });

    return res.json({
      ok: true,
      message: "",
      data: dataTipoEjercicios,
    });
  } catch (error) {
    console.log(error);
    return res.json(errorMessage());
  }
};

export const getOneTipoEjercicios = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const respDB = await prisma.tBL_TIPOSEJERCICIOS.findFirst({
      where: {
        id,
      },
      include: {
        ejercicios: true,
      },
    });

    if (!respDB) throw new Error("error");

    return res.json({
      ok: true,
      message: "",
      data: respDB,
    });
  } catch (error) {
    console.log(error);
    return res.json(
      errorMessage("Error en la consulta o tipo de ejercicio no existente")
    );
  }
};

export const deleteTipoEjercicios = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const respDB = await prisma.tBL_TIPOSEJERCICIOS.delete({ where: { id } });

    if (!respDB) throw new Error("error");

    return res.json({
      ok: true,
      message: "",
      data: respDB,
    });
  } catch (error) {
    console.log(error);
    return res.json(errorMessage("Error al eliminar el tipo de ejercicio"));
  }
};

export const updateTipoEjercicios = async (req: Request, res: Response) => {
  try {
    const { id, descripcion, nombreTipo }: ITipoEjercicios = req.body;

    const findTipoEjercicio = await prisma.tBL_TIPOSEJERCICIOS.findFirst({
      where: {
        id,
      },
    });
    if (!findTipoEjercicio) throw new Error("Tipo de ejercicio no existente");

    const updateTipo = await prisma.tBL_TIPOSEJERCICIOS.update({
      where: {
        id,
      },
      data: {
        descripcion,
        nombreTipo,
      },
    });

    return res.json({
      ok: true,
      message: "Tipo de Ejercicio creado",
      data: updateTipo,
    });
  } catch (error) {
    console.log(error);
    return res.json(
      errorMessage("Error al actualizar tipo de ejercicio o no existente")
    );
  }
};

// TODO OTRA COSA
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

export const getAllEjercicios = async (req: Request, res: Response) => {
  try {
    const dataEjercicios = await prisma.tBL_EJERCICIO.findMany({
      include: {
        rutinas: true,
        tipoEjercicios: true,
      },
    });

    return res.json({
      ok: true,
      message: "",
      data: dataEjercicios,
    });
  } catch (error) {
    console.log(error);
    return res.json(errorMessage());
  }
};

export const getOneEjercicios = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const respDB = await prisma.tBL_EJERCICIO.findFirst({
      where: {
        id,
      },
      include: {
        rutinas: true,
        tipoEjercicios: true,
      },
    });

    if (!respDB) throw new Error("error");

    return res.json({
      ok: true,
      message: "",
      data: respDB,
    });
  } catch (error) {
    console.log(error);
    return res.json(
      errorMessage("Error en la consulta o ejercicio no existente")
    );
  }
};

export const deleteEjercicios = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const respDB = await prisma.tBL_EJERCICIO.delete({ where: { id } });

    if (!respDB) throw new Error("error");

    return res.json({
      ok: true,
      message: "",
      data: respDB,
    });
  } catch (error) {
    console.log(error);
    return res.json(errorMessage("Error al eliminar el ejercicio"));
  }
};

export const updateEjercicios = async (req: Request, res: Response) => {
  try {
    const { id, descripcion, id_tipo, imagen, nombre }: IEjercicio = req.body;

    const findEjercicio = await prisma.tBL_EJERCICIO.findFirst({
      where: {
        id,
      },
    });
    if (!findEjercicio) throw new Error("Ejercicio no existente");

    const updateEjercicio = await prisma.tBL_EJERCICIO.update({
      where: {
        id,
      },
      data: {
        descripcion,
        id_tipo,
        nombre,
      },
    });

    return res.json({
      ok: true,
      message: "",
      data: updateEjercicio,
    });
  } catch (error) {
    console.log(error);
    return res.json(
      errorMessage("Error al actualizar ejercicio o no existente")
    );
  }
};
