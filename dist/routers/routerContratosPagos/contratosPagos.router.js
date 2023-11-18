"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerContratoPagos = void 0;
const express_1 = require("express");
const controlContratos_controller_1 = require("../../controllers/controlContratosPagos/controlContratos.controller");
exports.routerContratoPagos = (0, express_1.Router)();
// * Contratos
exports.routerContratoPagos.get("/contrato-show", controlContratos_controller_1.getOneContrato);
exports.routerContratoPagos.post("/contrato-add-one", controlContratos_controller_1.addContrato);
exports.routerContratoPagos.put("/contrato-update-one", controlContratos_controller_1.updateContrato);
exports.routerContratoPagos.delete("/contrato-delete-one", controlContratos_controller_1.deleteContrato);
