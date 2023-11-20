import { JwtPayload } from "jsonwebtoken";

export interface IPayload extends JwtPayload {
  respDB: RespDB;
  iat: number;
  exp: number;
}

export interface RespDB {
  id: string;
  nombre: string;
  correoElectronico: string;
  contrasena: string;
  ultimaConexion: string;
  imagenPerfil: string;
  estado: string;
  id_rel_role: string;
  createdAt: string;
  updatedAt: string;
  relPermisosRoles: RelPermisosRoles;
}

export interface RelPermisosRoles {
  id: string;
  id_role: string;
  id_permiso: string;
  permisos: Permisos;
  roles: Roles;
}

export interface Permisos {
  id: string;
  nombre: string;
  descripcion: string;
  acciones: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Roles {
  id: string;
  nombre: string;
  descripcion: string;
}
