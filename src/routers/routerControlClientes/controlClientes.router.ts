import { Router } from 'express';
import { addClientes, getAllClientes } from '../../controllers/controlClientes/controlClientes.controller';

export const routerControlClientes = Router()

// * Clientes
routerControlClientes.get('/show-all', getAllClientes)
routerControlClientes.post('/add-one', addClientes)
routerControlClientes.put('/update-one', addClientes)
routerControlClientes.delete('/delete-one', addClientes)
