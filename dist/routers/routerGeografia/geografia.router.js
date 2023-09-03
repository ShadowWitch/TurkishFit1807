"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerGeografia = void 0;
const express_1 = require("express");
const pais_controller_1 = require("../../controllers/controlGeografia/pais.controller");
const departamentos_controller_1 = require("../../controllers/controlGeografia/departamentos.controller");
const municipios_controller_1 = require("../../controllers/controlGeografia/municipios.controller");
exports.routerGeografia = (0, express_1.Router)();
// * Paises
exports.routerGeografia.get('/pais-show-all', pais_controller_1.getAllPaises);
exports.routerGeografia.post('/pais-add-one', pais_controller_1.addPaises);
exports.routerGeografia.put('/pais-update-one', pais_controller_1.updatePaises);
exports.routerGeografia.delete('/pais-delete-one', pais_controller_1.deletePaises);
// * Deptos
exports.routerGeografia.get('/depto-show-all', departamentos_controller_1.getAllDepartamentos);
exports.routerGeografia.post('/depto-add-one', departamentos_controller_1.addDepartamentos);
exports.routerGeografia.put('/depto-update-one', departamentos_controller_1.updateDepartamentos);
exports.routerGeografia.delete('/depto-delete-one', departamentos_controller_1.deleteDepartamentos);
// * Municipios
exports.routerGeografia.get('/municipio-show-all', municipios_controller_1.getAllMunicipios);
exports.routerGeografia.post('/municipio-add-one', municipios_controller_1.addMunicipios);
exports.routerGeografia.put('/municipio-update-one', municipios_controller_1.updateMunicipios);
exports.routerGeografia.delete('/municipio-delete-one', municipios_controller_1.deleteMunicipios);
