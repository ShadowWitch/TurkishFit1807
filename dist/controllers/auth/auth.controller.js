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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRecuperacionPassword = exports.authRegistrar = exports.authLogin = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("../../config/db");
const authLogin = (req, res) => {
    return res.json({
        ok: true,
        msg: "Logeando",
    });
};
exports.authLogin = authLogin;
const authRegistrar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, contrasena, correoElectronico, id_role, imagenPerfil = "", } = req.body;
        const contrasenaEncriptada = yield bcrypt_1.default.hashSync(contrasena.toString().toLowerCase(), 10);
        const respDB = yield db_1.prisma.tBL_USUARIOS.create({
            data: {
                nombre: nombre.toString().toLocaleLowerCase(),
                contrasena: contrasenaEncriptada,
                correoElectronico: correoElectronico.toString(),
                estado: 'Activo',
                id_role: id_role.toString(),
            }
        });
        console.log('RESP >> ', JSON.stringify(respDB, null, 3));
        return res.json({
            ok: true,
            message: 'Usuario creado',
            data: respDB
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
exports.authRegistrar = authRegistrar;
const authRecuperacionPassword = (req, res) => {
    return res.json({
        ok: true,
        msg: "Recuperar Contrasena",
        data: null
    });
};
exports.authRecuperacionPassword = authRecuperacionPassword;
