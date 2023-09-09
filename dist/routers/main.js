"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerMain = void 0;
const express_1 = require("express");
const controlClientes_router_1 = require("./routerControlClientes/controlClientes.router");
const geografia_router_1 = require("./routerGeografia/geografia.router");
const contratosPagos_router_1 = require("./routerContratosPagos/contratosPagos.router");
const auth_router_1 = require("./auth/auth.router");
const controlUsuarios_router_1 = require("./routerControlUsuarios/controlUsuarios.router");
exports.routerMain = (0, express_1.Router)();
exports.routerMain.use("/clientes", controlClientes_router_1.routerControlClientes);
exports.routerMain.use("/geografia", geografia_router_1.routerGeografia);
exports.routerMain.use("/contrato-pagos", contratosPagos_router_1.routerContratoPagos);
exports.routerMain.use("/control-usuarios", controlUsuarios_router_1.routerControlUsuariosRolesYPermisos);
// * Signin
exports.routerMain.use("/auth", auth_router_1.authRouter);
