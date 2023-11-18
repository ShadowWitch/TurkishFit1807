
import { Request, Response, NextFunction, ErrorRequestHandler, Errback } from 'express'

interface ErrorType {
    code: string | null;
    data: string | null;
    message: string | null;
}

// Middleware de manejo de errores
export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Si la respuesta ya se ha enviado, pasa al siguiente middleware
    if (res.headersSent) {
        return next(err);
    }

    // Log del error (puedes personalizar esto según tus necesidades)
    console.error(err);

    // Responde al cliente con un código de estado y mensaje de error
    res.status(500).json({
        error: 'Internal Server Error',
    });
};

// Middleware para lanzar un error 404 cuando no se encuentra la ruta
export const notFoundHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Crea un error con un mensaje descriptivo
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);

    // Pasa el control al siguiente middleware con el error
    next(error);
};

// Middleware para manejar errores específicos (puedes personalizar según tus necesidades)
export const specificErrorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err.message === 'Error específico') {
        // Manejar el error específico de acuerdo a tus necesidades
        return res.status(400).json({ error: 'Bad Request' });
    }

    // Si no es un error específico, pasa al siguiente middleware
    next(err);
};