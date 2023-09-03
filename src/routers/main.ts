import express, { Express, Request, Response, Router } from 'express';
import { routerControlClientes } from './routerControlClientes/controlClientes.router';

export const routerMain = Router()

routerMain.use('/clientes', routerControlClientes)

routerMain.use('/geografia', routerControlClientes)



