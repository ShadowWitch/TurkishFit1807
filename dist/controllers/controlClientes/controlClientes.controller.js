"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClientes = exports.updateClientes = exports.addClientes = exports.getOneClientes = exports.getAllClientes = void 0;
const getAllClientes = (req, res) => {
    return res.json({
        ok: true,
        msg: 'prueba'
    });
};
exports.getAllClientes = getAllClientes;
const getOneClientes = (req, res) => {
    return res.json({
        ok: true,
        msg: 'prueba'
    });
};
exports.getOneClientes = getOneClientes;
const addClientes = (req, res) => {
    return res.json({
        ok: true,
        msg: 'agregando cliente'
    });
};
exports.addClientes = addClientes;
const updateClientes = (req, res) => {
    return res.json({
        ok: true,
        msg: 'actualizando cliente'
    });
};
exports.updateClientes = updateClientes;
const deleteClientes = (req, res) => {
    return res.json({
        ok: true,
        msg: 'actualizando cliente'
    });
};
exports.deleteClientes = deleteClientes;
