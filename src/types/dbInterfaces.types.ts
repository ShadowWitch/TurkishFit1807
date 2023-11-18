import { prisma } from "../config/db";

export interface IClientes {
  DNI: string;
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  otroNombre: string;
  telefono: string;
  fechaNacimiento: string;
  fechaDeIngreso: string;

  id_municipio: string;
  id_contrato: string;
}


export interface IChequeo extends IClientes {
  peso: string;
  estatura: string;
  nivelDeMasa: string;
  nivelDeGrasa: string;
  fechaDelChequeo: string;
}

export interface IContrato extends IChequeo {
  descripcion: string | undefined;
  fechaDeInicio: string;
  fechaDeFin: string;
  ultimaRenovacion: string
  id_pago: string;
  estado: 'Activo' | ' Vencido'

}

export interface IPermisos {
  nombre: string;
  descripcion: string
  acciones: string[]
}

export interface IRELPermisosRoles {
  id_role: string;
  id_permiso: string;

}


export interface IMunicipios {
  nombre: string;
  codigo: string;
}