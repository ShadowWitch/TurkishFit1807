"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerContratoPagos = void 0;
const express_1 = require("express");
const controlContratos_controller_1 = require("../../controllers/controlContratosPagos/controlContratos.controller");
const controlPagos_controller_1 = require("../../controllers/controlContratosPagos/controlPagos.controller.");
exports.routerContratoPagos = (0, express_1.Router)();
// * Contratos
exports.routerContratoPagos.get('/contrato-show', controlContratos_controller_1.getOneContrato);
exports.routerContratoPagos.post('/contrato-add-one', controlContratos_controller_1.addContrato);
exports.routerContratoPagos.put('/contrato-update-one', controlContratos_controller_1.updateContrato);
exports.routerContratoPagos.delete('/contrato-delete-one', controlContratos_controller_1.deleteContrato);
// * Pagos
exports.routerContratoPagos.get('/pagos-show', controlPagos_controller_1.getOnePagos);
exports.routerContratoPagos.post('/pagos-add-one', controlPagos_controller_1.addPagos);
exports.routerContratoPagos.put('/pagos-update-one', controlPagos_controller_1.updatePagos);
exports.routerContratoPagos.delete('/pagos-delete-one', controlPagos_controller_1.deletePagos);
