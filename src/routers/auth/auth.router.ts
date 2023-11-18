import { Router } from 'express';
import { authLogin, authRecuperacionPassword, authRegistrar } from '../../controllers/auth/auth.controller';
import { errorHandler, notFoundHandler, specificErrorHandler } from '../../middlewares/errorManager.middleware';

export const authRouter = Router()

// * Login
authRouter.post('/login', authLogin)

// * Registrar
authRouter.post('/register', authRegistrar)

// * Registrar
authRouter.post('/recovery-password', authRecuperacionPassword)