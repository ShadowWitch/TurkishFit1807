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
exports.deleteContrato = exports.updateContrato = exports.addContrato = exports.getOneContrato = exports.getAllContrato = void 0;
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
        const { descripcion, estado, fechaDeFin, fechaDeInicio, ultimaRenovacion, } = req.body;
        const newContrato = yield db_1.prisma.tBL_CONTRATOS.create({
            data: {
                estado,
                fechaDeFin: new Date(fechaDeFin),
                fechaDeInicio: new Date(fechaDeInicio),
                ultimaRenovacion: new Date(ultimaRenovacion),
                descripcion,
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
const updateContrato = (req, res) => {
    return res.json({
        ok: true,
        msg: "ver todos Contrato",
    });
};
exports.updateContrato = updateContrato;
const deleteContrato = (req, res) => {
    return res.json({
        ok: true,
        msg: "ver todos Contrato",
    });
};
exports.deleteContrato = deleteContrato;
