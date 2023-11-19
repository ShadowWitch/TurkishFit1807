"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerControlClientes = void 0;
const express_1 = require("express");
const controlClientes_controller_1 = require("../../controllers/controlClientes/controlClientes.controller");
exports.routerControlClientes = (0, express_1.Router)();
// * Clientes
exports.routerControlClientes.get("/show-all", controlClientes_controller_1.getAllClientes);
exports.routerControlClientes.get("/show-one/:id", controlClientes_controller_1.getOneClientes);
exports.routerControlClientes.post("/add", controlClientes_controller_1.addClientes);
exports.routerControlClientes.delete("/delete/:id", controlClientes_controller_1.deleteClientes);
exports.routerControlClientes.put("/update", controlClientes_controller_1.addClientes);
