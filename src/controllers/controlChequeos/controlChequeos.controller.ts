import { Request, Response } from "express";
import { errorMessage } from "../../helpers/errorMessage.helper";
import { prisma } from "../../config/db";
import { IChequeo } from "../../types/dbInterfaces.types";

export const addChequeo = async (req: Request, res: Response) => {
  //* Para asignar mas chequeos a las persona
  try {
    const {
      peso,
      estatura,
      nivelDeGrasa,
      nivelDeMasa,
      fechaDelChequeo,
      id_cliente: id,
    }: IChequeo = req.body;

    const newChequeo = await prisma.tBL_INFORMACIONCHEQUEO.create({
      data: {
        peso,
        estatura,
        nivelDeGrasa,
        nivelDeMasa,
        fechaDelChequeo: new Date(fechaDelChequeo),
        id_cliente: id as string,
      },
    });

    if (!newChequeo) throw new Error("error");

    return res.json({
      ok: true,
      message: "Chequeo creado y asignado",
      data: newChequeo,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOneChequeo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const respDB = await prisma.tBL_INFORMACIONCHEQUEO.findFirst({
      where: {
        id,
      },
      include: {
        clientes: true,
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
      errorMessage("Error en la consulta  o chequeo no existente")
    );
  }
};

export const updateChequeo = async (req: Request, res: Response) => {
  try {
    const {
      id_chequeo,
      peso,
      estatura,
      nivelDeGrasa,
      nivelDeMasa,
      fechaDelChequeo,
    }: IChequeo = req.body;

    const findChequeo = await prisma.tBL_INFORMACIONCHEQUEO.findFirst({
      where: {
        id: id_chequeo,
      },
    });

    if (!findChequeo) throw new Error("Chequeo no existente");

    const updateChequeo = await prisma.tBL_INFORMACIONCHEQUEO.update({
      where: {
        id: id_chequeo,
      },
      data: {
        peso,
        estatura,
        nivelDeGrasa,
        nivelDeMasa,
        fechaDelChequeo: new Date(fechaDelChequeo),
      },
    });

    return res.json({
      ok: true,
      message: "",
      data: updateChequeo,
    });
  } catch (error) {
    console.log(error);
    return res.json(
      errorMessage("Error al actualizar el cliente o cliente no existente")
    );
  }
};
