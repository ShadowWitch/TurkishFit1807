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
exports.deleteContrato = exports.checkContratos = exports.renovarContrato = exports.updateContrato = exports.addContrato = exports.getOneContrato = exports.getAllContrato = void 0;
const errorMessage_helper_1 = require("../../helpers/errorMessage.helper");
const db_1 = require("../../config/db");
const getAllContrato = (req, res) => {
    return res.json({
        ok: true,
        msg: "ver todos Contrato",
    });
};
exports.getAllContrato = getAllContrato;
const getOneContrato = (req, res) => {
    return res.json({
        ok: true,
        msg: "ver todos Contrato",
    });
};
exports.getOneContrato = getOneContrato;
const addContrato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { descripcion, estado, fechaDeFin, fechaDeInicio, ultimaRenovacion, id_cliente, } = req.body;
        const newContrato = yield db_1.prisma.tBL_CONTRATOS.create({
            data: {
                estado,
                fechaDeFin: new Date(fechaDeFin),
                fechaDeInicio: new Date(fechaDeInicio),
                ultimaRenovacion: new Date(ultimaRenovacion),
                descripcion,
                id_cliente,
            },
        });
        return res.json({
            ok: true,
            message: "Contrato creado",
            data: newContrato,
        });
    }
    catch (error) {
        console.log(error);
        return res.json((0, errorMessage_helper_1.errorMessage)("Error en la consulta"));
    }
});
exports.addContrato = addContrato;
const updateContrato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_contrato, descripcion, estado, fechaDeFin, fechaDeInicio, ultimaRenovacion, } = req.body;
        const findContrato = yield db_1.prisma.tBL_CONTRATOS.findFirst({
            where: {
                id: id_contrato,
            },
        });
        if (!findContrato)
            throw new Error("Contrato no existente");
        const updateContrato = yield db_1.prisma.tBL_CONTRATOS.update({
            where: {
                id: id_contrato,
            },
            data: {
                descripcion,
                estado,
                fechaDeFin: new Date(fechaDeFin),
                fechaDeInicio: new Date(fechaDeInicio),
                ultimaRenovacion: new Date(ultimaRenovacion),
                // id_cliente,
            },
        });
        return res.json({
            ok: true,
            message: "",
            data: updateContrato,
        });
    }
    catch (error) {
        console.log(error);
        return res.json((0, errorMessage_helper_1.errorMessage)("Error al actualizar el contrato o contrato no existente"));
    }
});
exports.updateContrato = updateContrato;
const renovarContrato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { 
        // estado,
        fechaDeFin, ultimaRenovacion, 
        // id_cliente,
        id_contrato, } = req.body;
        const findContrato = yield db_1.prisma.tBL_CONTRATOS.findFirst({
            where: {
                id: id_contrato,
            },
        });
        if (!findContrato)
            throw new Error("Contrato no existente");
        const renovarContrato = yield db_1.prisma.tBL_CONTRATOS.update({
            where: {
                id: id_contrato,
            },
            data: {
                estado: "Activo",
                fechaDeFin: new Date(fechaDeFin),
                ultimaRenovacion: new Date(ultimaRenovacion),
            },
        });
        return res.json({
            ok: true,
            message: "Contrato renovado con exito",
            data: renovarContrato,
        });
    }
    catch (error) {
        console.log(error);
        return res.json((0, errorMessage_helper_1.errorMessage)("Error en la consulta"));
    }
});
exports.renovarContrato = renovarContrato;
const checkContratos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respContratos = yield db_1.prisma.tBL_CONTRATOS.findMany({
            where: {
                estado: "Vencido",
            },
            include: {
                clientes: true,
            },
        });
        return res.json({
            ok: true,
            message: "",
            data: respContratos,
        });
    }
    catch (error) {
        console.log(error);
        return res.json((0, errorMessage_helper_1.errorMessage)());
    }
});
exports.checkContratos = checkContratos;
const deleteContrato = (req, res) => {
    return res.json({
        ok: true,
        msg: "ver todos Contrato",
    });
};
exports.deleteContrato = deleteContrato;
