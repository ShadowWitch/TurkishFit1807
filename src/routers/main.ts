import { Router } from "express";
import { routerControlClientes } from "./routerControlClientes/controlClientes.router";
import { routerGeografia } from "./routerGeografia/geografia.router";
import { routerContratoPagos } from "./routerContratosPagos/controlContratos.router";
import { authRouter } from "./auth/auth.router";
import { routerControlUsuariosRolesYPermisos } from "./routerControlUsuarios/controlUsuarios.router";
import { routerEjercicios } from "./routerEjercicios/ejercicios.router";
import { routerChequeos } from "./routerChequeos/controlChequeos.router";

export const routerMain = Router();

routerMain.use("/clientes", routerControlClientes);
routerMain.use("/geografia", routerGeografia);
routerMain.use("/contrato", routerContratoPagos);
routerMain.use("/control-usuarios", routerControlUsuariosRolesYPermisos);

routerMain.use("/ejercicio", routerEjercicios);
routerMain.use("/chequeo", routerChequeos);

// * Signin
routerMain.use("/auth", authRouter);
