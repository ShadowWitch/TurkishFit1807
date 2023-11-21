"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../../controllers/auth/auth.controller");
exports.authRouter = (0, express_1.Router)();
// * Login
exports.authRouter.post("/login", auth_controller_1.authLogin);
exports.authRouter.get("/check", auth_controller_1.checkAuth);
// * Registrar
exports.authRouter.post("/register", auth_controller_1.authRegistrar);
// * Registrar
exports.authRouter.post("/recovery-password", auth_controller_1.authRecuperacionPassword);
