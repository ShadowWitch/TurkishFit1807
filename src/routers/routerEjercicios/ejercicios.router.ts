import { Router } from "express";
import { addTipoEjercicios } from "../../controllers/controlEjercicios/controlEjercicios.controller";

export const routerEjercicios = Router();

routerEjercicios.post("/ejercicios-add", addTipoEjercicios);
// routerEjercicios.get("/ejercicios-show");
