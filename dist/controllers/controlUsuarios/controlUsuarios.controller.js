"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuarios = exports.updateUsuarios = exports.addUsuarios = exports.getOneUsuarios = exports.getAllUsuarios = void 0;
const getAllUsuarios = (req, res) => {
    try {
        return res.json({
            ok: true,
            masd: 'asdqwe'
        });
    }
    catch (error) {
        console.log(error);
        return res.json({
            ok: false,
            msg: "error",
        });
    }
};
exports.getAllUsuarios = getAllUsuarios;
const getOneUsuarios = (req, res) => {
    return res.json({
        ok: true,
        msg: 'prueba'
    });
};
exports.getOneUsuarios = getOneUsuarios;
const addUsuarios = (req, res) => {
    return res.json({
        ok: true,
        msg: 'agregando cliente'
    });
};
exports.addUsuarios = addUsuarios;
const updateUsuarios = (req, res) => {
    return res.json({
        ok: true,
        msg: 'actualizando cliente'
    });
};
exports.updateUsuarios = updateUsuarios;
const deleteUsuarios = (req, res) => {
    return res.json({
        ok: true,
        msg: 'actualizando cliente'
    });
};
exports.deleteUsuarios = deleteUsuarios;
