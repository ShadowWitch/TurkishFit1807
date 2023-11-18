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
exports.deleteClientes = exports.updateClientes = exports.addClientes = exports.getOneClientes = exports.getAllClientes = void 0;
const db_1 = require("../../config/db");
const errorMessage_helper_1 = require("../../helpers/errorMessage.helper");
const getAllClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respDB = yield db_1.prisma.tBL_CLIENTES.findMany({});
        return res.json({
            ok: true,
            message: "",
            data: respDB,
        });
    }
    catch (error) {
        console.log(error);
        return res.json((0, errorMessage_helper_1.errorMessage)());
    }
});
exports.getAllClientes = getAllClientes;
const getOneClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const respDB = yield db_1.prisma.tBL_CLIENTES.findFirst({ where: { id } });
        if (!respDB)
            throw new Error("error");
        return res.json({
            ok: true,
            message: "",
            data: respDB,
        });
    }
    catch (error) {
        console.log(error);
        return res.json((0, errorMessage_helper_1.errorMessage)());
    }
});
exports.getOneClientes = getOneClientes;
const addClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { DNI, correo, direccionDetallada, fechaDeIngreso, fechaNacimiento, id_contrato, id_municipio, otroNombre = "", primerApellido, primerNombre, segundoApellido, segundoNombre, telefono, telefono2, } = req.body;
        const respDB = yield db_1.prisma.tBL_CLIENTES.create({
            data: {
                DNI,
                correo,
                direccionDetallada,
                fechaDeIngreso,
                fechaNacimiento,
                id_contrato,
                id_municipio,
                otroNombre,
                primerApellido,
                primerNombre,
                segundoApellido,
                segundoNombre,
                telefono,
                telefono2,
            },
        });
        if (!respDB)
            throw new Error("error");
        return res.json({
            ok: true,
            message: "Cliente creado",
            data: respDB,
        });
    }
    catch (error) {
        console.log(error);
        return res.json((0, errorMessage_helper_1.errorMessage)());
    }
});
exports.addClientes = addClientes;
const updateClientes = (req, res) => {
    return res.json({
        ok: true,
        msg: "actualizando cliente",
    });
};
exports.updateClientes = updateClientes;
const deleteClientes = (req, res) => {
    return res.json({
        ok: true,
        msg: "actualizando cliente",
    });
};
exports.deleteClientes = deleteClientes;
