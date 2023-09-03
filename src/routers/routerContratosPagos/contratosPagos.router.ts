import { Router } from 'express';
import { addContrato, deleteContrato, getOneContrato, updateContrato } from '../../controllers/controlContratosPagos/controlContratos.controller';
import { addPagos, deletePagos, getOnePagos, updatePagos } from '../../controllers/controlContratosPagos/controlPagos.controller.';

export const routerContratoPagos = Router()

// * Contratos
routerContratoPagos.get('/contrato-show', getOneContrato)
routerContratoPagos.post('/contrato-add-one', addContrato)
routerContratoPagos.put('/contrato-update-one', updateContrato)
routerContratoPagos.delete('/contrato-delete-one', deleteContrato)


// * Pagos
routerContratoPagos.get('/pagos-show', getOnePagos)
routerContratoPagos.post('/pagos-add-one', addPagos)
routerContratoPagos.put('/pagos-update-one', updatePagos)
routerContratoPagos.delete('/pagos-delete-one', deletePagos)