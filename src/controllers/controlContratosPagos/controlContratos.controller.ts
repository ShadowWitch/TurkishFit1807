import { Request, Response } from "express";
import { errorMessage } from "../../helpers/errorMessage.helper";
import { IContrato } from "../../types/dbInterfaces.types";
import { prisma } from "../../config/db";

export const getAllContrato = (req: Request, res: Response) => {
  return res.json({
    ok: true,
    msg: "ver todos Contrato",
  });
};

export const getOneContrato = (req: Request, res: Response) => {
  return res.json({
    ok: true,
    msg: "ver todos Contrato",
  });
};

export const addContrato = async (req: Request, res: Response) => {
  try {
    const {
      descripcion,
      estado,
      fechaDeFin,
      fechaDeInicio,
      ultimaRenovacion,
    }: IContrato = req.body;

    const newContrato = await prisma.tBL_CONTRATOS.create({
      data: {
        estado,
        fechaDeFin: new Date(fechaDeFin),
        fechaDeInicio: new Date(fechaDeInicio),
        ultimaRenovacion: new Date(ultimaRenovacion),
        descripcion,
      },
    });

    return res.json({
      ok: true,
      message: "Contrato creado",
      data: newContrato,
    });
  } catch (error) {
    console.log(error);
    return res.json(errorMessage("Error en la consulta"));
  }
};

export const updateContrato = (req: Request, res: Response) => {
  return res.json({
    ok: true,
    msg: "ver todos Contrato",
  });
};

export const deleteContrato = (req: Request, res: Response) => {
  return res.json({
    ok: true,
    msg: "ver todos Contrato",
  });
};
