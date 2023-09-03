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
exports.authRecuperacionPassword = exports.authRegistrar = exports.authLogin = void 0;
const db_1 = require("../../config/db");
const authLogin = (req, res) => {
    return res.json({
        ok: true,
        msg: "Logeando"
    });
};
exports.authLogin = authLogin;
const authRegistrar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    console.log('REQ >> ', JSON.stringify(body, null, 3));
    try {
        const resp = yield db_1.prisma.tBL_USUARIOS.findMany();
        console.log('RESP >> ', JSON.stringify(resp, null, 3));
        return res.json({
            ok: true,
            msg: resp
        });
    }
    catch (error) {
        console.log(error);
        return res.json({
            ok: false,
            msg: 'error'
        });
    }
});
exports.authRegistrar = authRegistrar;
const authRecuperacionPassword = (req, res) => {
    return res.json({
        ok: true,
        msg: "Recuperar Contrasena"
    });
};
exports.authRecuperacionPassword = authRecuperacionPassword;
