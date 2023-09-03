"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOnePago = void 0;
const getOnePago = (req, res) => {
    return res.json({
        ok: true,
        msg: 'PAGO!'
    });
};
exports.getOnePago = getOnePago;
