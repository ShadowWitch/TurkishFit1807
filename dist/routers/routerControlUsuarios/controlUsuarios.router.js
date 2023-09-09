"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerControlUsuariosRolesYPermisos = void 0;
const express_1 = require("express");
const controlUsuarios_controller_1 = require("../../controllers/controlUsuarios/controlUsuarios.controller");
const controlPermisos_controller_1 = require("../../controllers/controlUsuarios/controlPermisos.controller");
const controlRoles_controller_1 = require("../../controllers/controlUsuarios/controlRoles.controller");
exports.routerControlUsuariosRolesYPermisos = (0, express_1.Router)();
// * Usuarios
exports.routerControlUsuariosRolesYPermisos.get("/users/show-all", controlUsuarios_controller_1.getAllUsuarios);
exports.routerControlUsuariosRolesYPermisos.post("/users/add-one", controlUsuarios_controller_1.addUsuarios);
exports.routerControlUsuariosRolesYPermisos.put("/users/update-one", controlUsuarios_controller_1.updateUsuarios);
exports.routerControlUsuariosRolesYPermisos.delete("/users/delete-one", controlUsuarios_controller_1.deleteUsuarios);
// * Roles
exports.routerControlUsuariosRolesYPermisos.get("/roles/show-all", controlRoles_controller_1.getAllRoles);
exports.routerControlUsuariosRolesYPermisos.post("/roles/add-one", controlRoles_controller_1.addRoles);
exports.routerControlUsuariosRolesYPermisos.put("/roles/update-one", controlRoles_controller_1.updateRoles);
exports.routerControlUsuariosRolesYPermisos.delete("/roles/delete-one", controlRoles_controller_1.deleteRoles);
// * Permisos
exports.routerControlUsuariosRolesYPermisos.get("/permisos/show-all", controlPermisos_controller_1.getAllPermisos);
exports.routerControlUsuariosRolesYPermisos.post("/permisos/add-one", controlPermisos_controller_1.addPermisos);
exports.routerControlUsuariosRolesYPermisos.put("/permisos/update-one", controlPermisos_controller_1.updatePermisos);
exports.routerControlUsuariosRolesYPermisos.delete("/permisos/delete-one", controlPermisos_controller_1.deletePermisos);
