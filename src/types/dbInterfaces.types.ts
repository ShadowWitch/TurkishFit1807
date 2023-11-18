import { prisma } from "../config/db";

export interface IClientes {
  DNI: string;
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  otroNombre: string;
  telefono: string;
  telefono2: string;
  correo: string;
  fechaNacimiento: string;
  direccionDetallada: string;
  fechaDeIngreso: Date;

  id_municipio: string;
  id_contrato: string;
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
