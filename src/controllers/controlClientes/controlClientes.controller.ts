import type { Request, Response } from "express";
import { prisma } from "../../config/db";
import { errorMessage } from "../../helpers/errorMessage.helper";
import { IChequeo, IClientes, IContrato } from "../../types/dbInterfaces.types";

export const getAllClientes = async (req: Request, res: Response) => {
  try {
    const dataClientes = await prisma.tBL_CLIENTES.findMany({
      include: {
        chequeos: true,
        contratos: true,
      },
    });

    return res.json({
      ok: true,
      message: "",
      data: dataClientes,
    });
  } catch (error) {
    console.log(error);
    return res.json(errorMessage());
  }
};

export const getOneClientes = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const respDB = await prisma.tBL_CLIENTES.findFirst({
      where: {
        id,
      },
      include: {
        chequeos: true,
        contratos: true,
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
      errorMessage("Error en la consulta o cliente no existente")
    );
  }
};

export const addClientes = async (req: Request, res: Response) => {
  try {
    const {
      DNI,
      fechaDeIngreso,
      fechaNacimiento,
      id_municipio,
      otroNombre = "",
      primerApellido,
      primerNombre,
      segundoApellido,
      segundoNombre,
      telefono,

      estatura,
      fechaDelChequeo,
      nivelDeGrasa,
      nivelDeMasa,
      peso,
    }: IChequeo = req.body;

    const newClient = await prisma.tBL_CLIENTES.create({
      data: {
        DNI,
        fechaDeIngreso: new Date(fechaDeIngreso),
        fechaNacimiento: new Date(fechaNacimiento),
        id_municipio,
        otroNombre,
        primerApellido,
        primerNombre,
        segundoApellido,
        segundoNombre,
        telefono,
      },
    });

    const newChequeo = await prisma.tBL_INFORMACIONCHEQUEO.create({
      data: {
        estatura,
        fechaDelChequeo: new Date(fechaDelChequeo),
        nivelDeGrasa,
        nivelDeMasa,
        peso,
        id_cliente: newClient.id,
      },
    });

    if (!newChequeo) throw new Error("error");

    return res.json({
      ok: true,
      message: "Cliente creado",
      data: {
        cliente: newClient,
        chequeo: newChequeo,
      },
    });
  } catch (error) {
    console.log(error);
    return res.json(errorMessage("Error en la consulta"));
  }
};

export const updateClientes = async (req: Request, res: Response) => {
  try {
    const {
      DNI,
      fechaDeIngreso,
      fechaNacimiento,
      id_municipio,
      otroNombre,
      primerApellido,
      primerNombre,
      segundoApellido,
      segundoNombre,
      telefono,
      id_cliente: id,
    }: IClientes = req.body;

    const findCliente = await prisma.tBL_CLIENTES.findFirst({
      where: {
        id,
      },
    });

    if (!findCliente) throw new Error("Cliente no existente");

    const updateCliente = await prisma.tBL_CLIENTES.update({
      where: {
        id: id,
      },
      data: {
        DNI,
        fechaDeIngreso: new Date(fechaDeIngreso),
        fechaNacimiento: new Date(fechaNacimiento),
        id_municipio,
        otroNombre,
        primerApellido,
        primerNombre,
        segundoApellido,
        segundoNombre,
        telefono,
      },
    });

    return res.json({
      ok: true,
      message: "",
      data: updateCliente,
    });
  } catch (error) {
    console.log(error);
    return res.json(
      errorMessage("Error al actualizar el cliente o cliente no existente")
    );
  }
};

export const deleteClientes = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const respDB = await prisma.tBL_CLIENTES.delete({ where: { id } });

    if (!respDB) throw new Error("error");

    return res.json({
      ok: true,
      message: "",
      data: respDB,
    });
  } catch (error) {
    console.log(error);
    return res.json(errorMessage("Error al eliminar el cliente"));
  }
};
