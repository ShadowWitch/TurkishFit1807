"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerMain = void 0;
const express_1 = require("express");
const controlClientes_router_1 = require("./routerControlClientes/controlClientes.router");
exports.routerMain = (0, express_1.Router)();
exports.routerMain.use('/clientes', controlClientes_router_1.routerControlClientes);
exports.routerMain.use('/geografia', controlClientes_router_1.routerControlClientes);
