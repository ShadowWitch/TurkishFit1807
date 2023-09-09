"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoles = exports.updateRoles = exports.addRoles = exports.getOneRoles = exports.getAllRoles = void 0;
const db_1 = require("../../config/db");
const getAllRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respDB = yield db_1.prisma.tBL_ROLES.findMany({});
        return res.json({
            ok: true,
            message: "",
            data: respDB,
        });
    }
    catch (error) {
        console.log(error);
        return res.json({
            ok: false,
            msg: "error",
        });
    }
});
exports.getAllRoles = getAllRoles;
const getOneRoles = (req, res) => {
    return res.json({
        ok: true,
        msg: "prueba",
    });
};
exports.getOneRoles = getOneRoles;
const addRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, descripcion, id_permisos } = req.body;
    try {
        const respDB = yield db_1.prisma.tBL_ROLES.create({
            data: {
                nombre,
                descripcion,
                id_permisos,
            },
        });
        if (!respDB)
            throw new Error("error");
        return res.json({
            ok: true,
            message: "Permiso creado",
            data: respDB,
        });
    }
    catch (error) {
        console.log(error.message);
        return res.json({
            ok: false,
            msg: "error",
            data: null,
        });
    }
});
exports.addRoles = addRoles;
const updateRoles = (req, res) => {
    return res.json({
        ok: true,
        msg: "actualizando cliente",
    });
};
exports.updateRoles = updateRoles;
const deleteRoles = (req, res) => {
    return res.json({
        ok: true,
        msg: "actualizando cliente",
    });
};
exports.deleteRoles = deleteRoles;
