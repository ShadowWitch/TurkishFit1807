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
      descripcion = "N/A",
      estado,
      fechaDeFin,
      fechaDeInicio,
      ultimaRenovacion,
      id_cliente,
    }: IContrato = req.body;

    const findCliente = await prisma.tBL_CLIENTES.findFirst({
      where: {
        id: id_cliente,
      },
      include: {
        contratos: true,
      },
    });

    if (!findCliente) return res.json(errorMessage("Cliente no existente"));

    if (findCliente.contratos.length > 0)
      return res.json(errorMessage("Cliente ya tiene contrato"));

    const newContrato = await prisma.tBL_CONTRATOS.create({
      data: {
        estado,
        fechaDeFin: new Date(fechaDeFin),
        fechaDeInicio: new Date(fechaDeInicio),
        ultimaRenovacion: new Date(ultimaRenovacion),
        descripcion,
        id_cliente,
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

export const updateContrato = async (req: Request, res: Response) => {
  try {
    const {
      id_contrato,
      descripcion,
      estado,
      fechaDeFin,
      fechaDeInicio,
      ultimaRenovacion,
    }: // id_cliente,
    IContrato = req.body;

    const findContrato = await prisma.tBL_CONTRATOS.findFirst({
      where: {
        id: id_contrato,
      },
    });

    if (!findContrato) throw new Error("Contrato no existente");

    const updateContrato = await prisma.tBL_CONTRATOS.update({
      where: {
        id: id_contrato,
      },

      data: {
        descripcion,
        estado,
        fechaDeFin: new Date(fechaDeFin),
        fechaDeInicio: new Date(fechaDeInicio),
        ultimaRenovacion: new Date(ultimaRenovacion),
        // id_cliente,
      },
    });

    return res.json({
      ok: true,
      message: "",
      data: updateContrato,
    });
  } catch (error) {
    console.log(error);
    return res.json(
      errorMessage("Error al actualizar el contrato o contrato no existente")
    );
  }
};

export const renovarContrato = async (req: Request, res: Response) => {
  try {
    const {
      // estado,
      fechaDeFin,
      ultimaRenovacion,
      // id_cliente,
      id_contrato,
    }: IContrato = req.body;

    const findContrato = await prisma.tBL_CONTRATOS.findFirst({
      where: {
        id: id_contrato,
      },
    });

    if (!findContrato) throw new Error("Contrato no existente");

    const renovarContrato = await prisma.tBL_CONTRATOS.update({
      where: {
        id: id_contrato,
      },
      data: {
        estado: "Activo",
        fechaDeFin: new Date(fechaDeFin),
        ultimaRenovacion: new Date(ultimaRenovacion),
      },
    });
    return res.json({
      ok: true,
      message: "Contrato renovado con exito",
      data: renovarContrato,
    });
  } catch (error) {
    console.log(error);
    return res.json(errorMessage("Error en la consulta"));
  }
};

export const checkContratos = async (req: Request, res: Response) => {
  try {
    const respContratos = await prisma.tBL_CONTRATOS.findMany({
      where: {
        estado: "Vencido",
      },
      include: {
        clientes: true,
      },
    });

    return res.json({
      ok: true,
      message: "",
      data: respContratos,
    });
  } catch (error) {
    console.log(error);
    return res.json(errorMessage());
  }
};

export const deleteContrato = (req: Request, res: Response) => {
  return res.json({
    ok: true,
    msg: "ver todos Contrato",
  });
};
