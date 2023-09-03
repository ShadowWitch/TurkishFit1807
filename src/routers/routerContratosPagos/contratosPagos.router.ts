import { Router } from 'express';
import { addContrato, deleteContrato, getOneContrato, updateContrato } from '../../controllers/controlContratosPagos/controlContratos.controller';
import { addPagos, deletePagos, getOnePagos, updatePagos } from '../../controllers/controlContratosPagos/controlPagos.controller.';

export const routerContratoPagos = Router()

// * Contratos
routerContratoPagos.get('/show', getOneContrato)
routerContratoPagos.post('/add-one', addContrato)
routerContratoPagos.put('/update-one', updateContrato)
routerContratoPagos.delete('/delete-one', deleteContrato)


// * Pagos
routerContratoPagos.get('/show-pago', getOnePagos)
routerContratoPagos.post('/add-one', addPagos)
routerContratoPagos.put('/update-one', updatePagos)
routerContratoPagos.delete('/delete-one', deletePagos)