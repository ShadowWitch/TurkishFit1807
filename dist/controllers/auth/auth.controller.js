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
exports.authRecuperacionPassword = exports.authRegistrar = exports.checkAuth = exports.authLogin = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("../../config/db");
const enviromentAuth_helper_1 = require("../../helpers/enviromentAuth.helper");
const authLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, contrasena } = req.body;
        const respDB = yield db_1.prisma.tBL_USUARIOS.findFirst({
            where: {
                nombre,
            },
            include: {
                relPermisosRoles: {
                    include: {
                        permisos: true,
                        roles: true,
                    },
                },
            },
        });
        if (!respDB)
            return res.status(200).json({
                ok: false,
                message: "Usuario o contraseña no valido",
                data: null,
                estado: 401,
            });
        const verificarContrasena = yield bcrypt_1.default.compareSync(contrasena, respDB.contrasena);
        if (!verificarContrasena)
            return res.status(200).json({
                ok: false,
                message: "Usuario o contraseña no valido",
                data: null,
                estado: 401,
            });
        respDB.contrasena = ":)"; //* Engañar por molestar... Quitar password
        let token = jsonwebtoken_1.default.sign({
            respDB,
        }, enviromentAuth_helper_1.enviromentAuth.jwtSecretToken, { expiresIn: "2h" });
        return res.json({
            ok: true,
            msg: "Logeando",
            data: respDB,
            token,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.authLogin = authLogin;
const checkAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let token;
        console.log("REQ HEADERS >> ", req.headers.authorization);
        if (req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ").at(-1); // Guardar el token
        }
        if (!token) {
            return res.status(200).json({
                ok: false,
                message: "No autenticado.",
            });
        }
        const { respDB } = jsonwebtoken_1.default.verify(token, enviromentAuth_helper_1.enviromentAuth.jwtSecretToken);
        return res.json({
            ok: true,
            msg: "Logeando",
            data: respDB,
            token,
        });
        // req.usuario = { ...respDB };
    }
    catch (error) {
        console.log(error);
    }
});
exports.checkAuth = checkAuth;
const authRegistrar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, contrasena, correoElectronico, id_role, imagenPerfil = "", } = req.body;
        // * Verificar Usuario
        const verificacionUsuario = yield db_1.prisma.tBL_USUARIOS.findFirst({
            where: {
                OR: [
                    {
                        nombre: nombre.toLowerCase(),
                    },
                    {
                        correoElectronico: correoElectronico.toLowerCase(),
                    },
                ],
            },
        });
        if (verificacionUsuario)
            return res.status(400).json({
                ok: true,
                message: "Ese usuario o correo ya se encuentra en uso",
                data: null,
            });
        // * Registrar Usuario
        const contrasenaEncriptada = yield bcrypt_1.default.hashSync(contrasena.toLowerCase(), 10);
        const respDB = yield db_1.prisma.tBL_USUARIOS.create({
            data: {
                nombre: nombre.toLowerCase(),
                contrasena: contrasenaEncriptada,
                correoElectronico: correoElectronico,
                id_rel_role: id_role,
            },
        });
        return res.json({
            ok: true,
            message: "Usuario creado",
            data: respDB,
        });
    }
    catch (error) {
        console.log(error);
        return res.json({
            ok: false,
            msg: "error",
            data: null,
        });
    }
});
exports.authRegistrar = authRegistrar;
// TODO: LMOYA luego realizar recuperacion de contrasena por correo...
const authRecuperacionPassword = (req, res) => {
    return res.json({
        ok: true,
        msg: "Recuperar Contrasena",
        data: null,
    });
};
exports.authRecuperacionPassword = authRecuperacionPassword;
