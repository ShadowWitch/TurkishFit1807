import type { Request, Response } from 'express';

export const getAllClientes = (req: Request, res: Response) => {

    return res.json({
        ok: true,
        msg: 'prueba'
    })
}

export const getOneClientes = (req: Request, res: Response) => {

    return res.json({
        ok: true,
        msg: 'prueba'
    })
}


export const addClientes = (req: Request, res: Response) => {

    return res.json({
        ok: true,
        msg: 'agregando cliente'
    })
}


export const updateClientes = (req: Request, res: Response) => {

    return res.json({
        ok: true,
        msg: 'actualizando cliente'
    })
}


export const deleteClientes = (req: Request, res: Response) => {

    return res.json({
        ok: true,
        msg: 'actualizando cliente'
    })
}
