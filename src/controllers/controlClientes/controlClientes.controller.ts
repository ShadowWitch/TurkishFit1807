import type { Request, Response } from "express";
import { prisma } from "../../config/db";
import { errorMessage } from "../../helpers/errorMessage.helper";
import { IChequeo, IClientes, IContrato } from "../../types/dbInterfaces.types";


export const getAllClientes = async (req: Request, res: Response) => {
  try {
    const respDB = await prisma.tBL_CLIENTES.findMany({});

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

export const getOneClientes = async (req: Request, res: Response) => {
  try {
    const { id }: { id: string } = req.body;

    const respDB = await prisma.tBL_CLIENTES.findFirst({ where: { id } });

    if (!respDB) throw new Error("error");

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

export const addClientes = async (req: Request, res: Response) => {
  try {
    const {
      DNI,
      fechaDeIngreso,
      fechaNacimiento,
      id_contrato,
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
        id_cliente: newClient.id
      }
    })


    if (!newChequeo) throw new Error("error");

    return res.json({
      ok: true,
      message: "Cliente creado",
      data: {
        cliente: newClient,
        chequeo: newChequeo
      },
    });
  } catch (error) {
    console.log(error);
    return res.json(errorMessage());
  }
};

export const updateClientes = (req: Request, res: Response) => {
  return res.json({
    ok: true,
    msg: "actualizando cliente",
  });
};

export const deleteClientes = (req: Request, res: Response) => {
  return res.json({
    ok: true,
    msg: "actualizando cliente",
  });
};
