import { prisma } from "../config/db";

export interface IClientes {
  id?: string;
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
  id_contrato?: string;
}

export interface IChequeo extends IClientes {
  peso: string;
  estatura: string;
  nivelDeMasa: string;
  nivelDeGrasa: string;
  fechaDelChequeo: string;
}

export interface IContrato {
  descripcion: string | undefined;
  fechaDeInicio: string;
  fechaDeFin: string;
  ultimaRenovacion: string;
  estado: "Activo" | " Vencido";
}

export interface IPermisos {
  nombre: string;
  descripcion: string;
  acciones: string[];
}

export interface IRELPermisosRoles {
  id_role: string;
  id_permiso: string;
}

export interface IMunicipios {
  nombre: string;
  codigo: string;
}

export interface ITipoEjercicios {
  nombreTipo: string;
  descripcion: string;
}

export interface IEjercicio {
  nombre: string;
  descripcion: string;
  imagen: string;
  id_tipo: string;
}
