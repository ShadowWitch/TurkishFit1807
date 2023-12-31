import { Router } from "express";
import {
  addUsuarios,
  deleteUsuarios,
  getAllUsuarios,
  getOneUsuarios,
  inactiveUsuario,
  recuperarContrasena,
  updateContrasena,
  updateEmailOrUser,
  updateRol,
  updateUsuarios,
} from "../../controllers/controlUsuarios/controlUsuarios.controller";
import {
  addPermisos,
  deletePermisos,
  getAllPermisos,
  updatePermisos,
} from "../../controllers/controlUsuarios/controlPermisos.controller";
import {
  addRoles,
  deleteRoles,
  getAllRoles,
  listaRoles,
  updateRoles,
} from "../../controllers/controlUsuarios/controlRoles.controller";

export const routerControlUsuariosRolesYPermisos = Router();

// * Usuarios
routerControlUsuariosRolesYPermisos.get("/users/show-all", getAllUsuarios);
routerControlUsuariosRolesYPermisos.get("/users/show-one/:id", getOneUsuarios);

routerControlUsuariosRolesYPermisos.post("/users/add-one", addUsuarios);

routerControlUsuariosRolesYPermisos.post(
  "/users/active-inactive",
  inactiveUsuario
);

routerControlUsuariosRolesYPermisos.get(
  "/users/recuperar/:email",
  recuperarContrasena
);

routerControlUsuariosRolesYPermisos.put("/users/update-rol", updateRol);

routerControlUsuariosRolesYPermisos.put("/users/update", updateEmailOrUser);
routerControlUsuariosRolesYPermisos.put("/users/contrasena", updateContrasena);

routerControlUsuariosRolesYPermisos.delete("/users/delete-one", deleteUsuarios);

// * Roles

routerControlUsuariosRolesYPermisos.get("/roles/show-all", getAllRoles);

routerControlUsuariosRolesYPermisos.get("/roles/show-lista", listaRoles);

routerControlUsuariosRolesYPermisos.post("/roles/add", addRoles);
routerControlUsuariosRolesYPermisos.put("/roles/update-one", updateRoles);
routerControlUsuariosRolesYPermisos.delete("/roles/delete-one", deleteRoles);

// * Permisos
routerControlUsuariosRolesYPermisos.get("/permisos/show-all", getAllPermisos);
routerControlUsuariosRolesYPermisos.post("/permisos/add-one", addPermisos);
routerControlUsuariosRolesYPermisos.put("/permisos/update-one", updatePermisos);
routerControlUsuariosRolesYPermisos.delete(
  "/permisos/delete-one",
  deletePermisos
);
