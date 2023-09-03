import { Router } from 'express';
import { authLogin, authRecuperacionPassword, authRegistrar } from '../../controllers/auth/auth.controller';

export const authRouter = Router()

// * Login
authRouter.post('/login', authLogin)

// * Registrar
authRouter.post('/register', authRegistrar)

// * Registrar
authRouter.post('/recovery-password', authRecuperacionPassword)