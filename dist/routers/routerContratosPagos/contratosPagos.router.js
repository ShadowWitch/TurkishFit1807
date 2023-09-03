"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerContratoPagos = void 0;
const express_1 = require("express");
const controlContratos_controller_1 = require("../../controllers/controlContratosPagos/controlContratos.controller");
const controlPagos_controller_1 = require("../../controllers/controlContratosPagos/controlPagos.controller.");
exports.routerContratoPagos = (0, express_1.Router)();
// * Contratos
exports.routerContratoPagos.get('/show', controlContratos_controller_1.getOneContrato);
exports.routerContratoPagos.post('/add-one', controlContratos_controller_1.addContrato);
exports.routerContratoPagos.put('/update-one', controlContratos_controller_1.updateContrato);
exports.routerContratoPagos.delete('/delete-one', controlContratos_controller_1.deleteContrato);
// * Pagos
exports.routerContratoPagos.get('/show-pago', controlPagos_controller_1.getOnePagos);
exports.routerContratoPagos.post('/add-one', controlPagos_controller_1.addPagos);
exports.routerContratoPagos.put('/update-one', controlPagos_controller_1.updatePagos);
exports.routerContratoPagos.delete('/delete-one', controlPagos_controller_1.deletePagos);
