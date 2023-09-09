import { Router } from "express";
import {
  addUsuarios,
  deleteUsuarios,
  getAllUsuarios,
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
  updateRoles,
} from "../../controllers/controlUsuarios/controlRoles.controller";

export const routerControlUsuariosRolesYPermisos = Router();

// * Usuarios
routerControlUsuariosRolesYPermisos.get("/users/show-all", getAllUsuarios);
routerControlUsuariosRolesYPermisos.post("/users/add-one", addUsuarios);
routerControlUsuariosRolesYPermisos.put("/users/update-one", updateUsuarios);
routerControlUsuariosRolesYPermisos.delete("/users/delete-one", deleteUsuarios);

// * Roles

routerControlUsuariosRolesYPermisos.get("/roles/show-all", getAllRoles);
routerControlUsuariosRolesYPermisos.post("/roles/add-one", addRoles);
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
