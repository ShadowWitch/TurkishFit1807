import { Router } from "express";
import {
  authLogin,
  authRecuperacionPassword,
  authRegistrar,
  checkAuth,
} from "../../controllers/auth/auth.controller";

export const authRouter = Router();

// * Login
authRouter.post("/login", authLogin);
authRouter.get("/check", checkAuth);

// * Registrar
authRouter.post("/register", authRegistrar);

// * Registrar
authRouter.post("/recovery-password", authRecuperacionPassword);
