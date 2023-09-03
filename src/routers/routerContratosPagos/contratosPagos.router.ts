import { Router } from 'express';
import { addContrato, deleteContrato, getOneContrato, updateContrato } from '../../controllers/controlContratosPagos/controlContratos.controller';
import { getOnePago } from '../../controllers/controlContratosPagos/controlPagos.controller.';

export const routerContratoPagos = Router()

// * Contratos
routerContratoPagos.get('/show', getOneContrato)
routerContratoPagos.post('/add-one', addContrato)
routerContratoPagos.put('/update-one', updateContrato)
routerContratoPagos.delete('/delete-one', deleteContrato)


// * Pagos
routerContratoPagos.get('/show-pago', getOnePago)
