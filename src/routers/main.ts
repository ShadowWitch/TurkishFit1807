import { Router } from "express";
import { routerControlClientes } from "./routerControlClientes/controlClientes.router";
import { routerGeografia } from "./routerGeografia/geografia.router";
import { routerContratoPagos } from "./routerContratosPagos/controlContratos.router";
import { authRouter } from "./auth/auth.router";
import { routerControlUsuariosRolesYPermisos } from "./routerControlUsuarios/controlUsuarios.router";
import { routerEjercicios } from "./routerEjercicios/ejercicios.router";
import { routerChequeos } from "./routerChequeos/controlChequeos.router";
import { validarJWT } from "../middlewares/validarJWT.middleware";

export const routerMain = Router();

// * Signin
routerMain.use("/auth", authRouter);

routerMain.use(validarJWT);

routerMain.use("/clientes", routerControlClientes);
routerMain.use("/geografia", routerGeografia);
routerMain.use("/contrato", routerContratoPagos);
routerMain.use("/control-usuarios", routerControlUsuariosRolesYPermisos);

routerMain.use("/ejercicio", routerEjercicios);
routerMain.use("/chequeo", routerChequeos);
