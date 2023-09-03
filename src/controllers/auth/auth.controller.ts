import type { Request, Response } from 'express';
import { prisma } from '../../config/db';

export const authLogin = (req: Request, res: Response) => {

    return res.json({
        ok: true,
        msg: "Logeando"
    })
}


export const authRegistrar = async (req: Request, res: Response) => {
    const body = req.body
    console.log('REQ >> ', JSON.stringify(body, null, 3))

    try {
        const resp = await prisma.tBL_USUARIOS.findMany()
        console.log('RESP >> ', JSON.stringify(resp, null, 3));
        return res.json({
            ok: true,
            msg: resp
        })
    } catch (error) {
        console.log(error);
        return res.json({
            ok: false,
            msg: 'error'
        })
    }
}


export const authRecuperacionPassword = (req: Request, res: Response) => {

    return res.json({
        ok: true,
        msg: "Recuperar Contrasena"
    })
}