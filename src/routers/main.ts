import express, { Express, Request, Response, Router } from 'express';
import { routerControlClientes } from './routerControlClientes/controlClientes.router';
import { routerGeografia } from './routerGeografia/geografia.router';
import { routerContratoPagos } from './routerContratosPagos/contratosPagos.router';

export const routerMain = Router()

routerMain.use('/clientes', routerControlClientes)
routerMain.use('/geografia', routerGeografia)
routerMain.use('/contrato-pagos', routerContratoPagos)


