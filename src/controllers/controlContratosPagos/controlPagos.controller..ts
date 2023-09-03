import { Request, Response } from 'express'

export const getOnePago = (req: Request, res: Response) => {
    return res.json({
        ok: true,
        msg: 'PAGO!'
    })
}
