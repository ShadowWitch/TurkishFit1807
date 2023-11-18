
import { Request, Response, NextFunction, ErrorRequestHandler, Errback } from 'express'


interface ErrorType {
    code: string | null;
    data: string | null;
    message: string | null;
}

export const errorManager = (err: ErrorType, req: Request, res: Response, next: NextFunction) => {
    console.log('ERROR >> ', err);
    res.status(500).json({
        code: err.code || '0000',
        data: err.data || null,
        message: err.message || 'Errorsito de prueba'
    })
}