import type { Request, Response } from 'express';

export const getAllUsuarios = (req: Request, res: Response) => {

    try {
        return res.json({
            ok: true,
            masd: 'asdqwe'
        })
    } catch (error: any) {
        console.log(error);
        return res.json({
            ok: false,
            msg: "error",
        });
    }


}

export const getOneUsuarios = (req: Request, res: Response) => {

    return res.json({
        ok: true,
        msg: 'prueba'
    })
}


export const addUsuarios = (req: Request, res: Response) => {

    return res.json({
        ok: true,
        msg: 'agregando cliente'
    })
}


export const updateUsuarios = (req: Request, res: Response) => {

    return res.json({
        ok: true,
        msg: 'actualizando cliente'
    })
}


export const deleteUsuarios = (req: Request, res: Response) => {

    return res.json({
        ok: true,
        msg: 'actualizando cliente'
    })
}
