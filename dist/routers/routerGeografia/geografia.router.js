"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerGeografia = void 0;
const express_1 = require("express");
const pais_controller_1 = require("../../controllers/controlGeografia/pais.controller");
const departamentos_controller_1 = require("../../controllers/controlGeografia/departamentos.controller");
const municipios_controller_1 = require("../../controllers/controlGeografia/municipios.controller");
exports.routerGeografia = (0, express_1.Router)();
// * Paises
exports.routerGeografia.get('/show-all', pais_controller_1.getAllPaises);
exports.routerGeografia.post('/add-one', pais_controller_1.addPaises);
exports.routerGeografia.put('/update-one', pais_controller_1.updatePaises);
exports.routerGeografia.delete('/delete-one', pais_controller_1.deletePaises);
// * Deptos
exports.routerGeografia.get('/show-all', departamentos_controller_1.getAllDepartamentos);
exports.routerGeografia.post('/add-one', departamentos_controller_1.addDepartamentos);
exports.routerGeografia.put('/update-one', departamentos_controller_1.updateDepartamentos);
exports.routerGeografia.delete('/delete-one', departamentos_controller_1.deleteDepartamentos);
// * Municipios
exports.routerGeografia.get('/show-all', municipios_controller_1.getAllMunicipios);
exports.routerGeografia.post('/add-one', municipios_controller_1.addMunicipios);
exports.routerGeografia.put('/update-one', municipios_controller_1.updateMunicipios);
exports.routerGeografia.delete('/delete-one', municipios_controller_1.deleteMunicipios);
