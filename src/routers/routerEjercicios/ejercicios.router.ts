import { Router } from "express";
import {
  addEjercicio,
  addTipoEjercicios,
} from "../../controllers/controlEjercicios/controlEjercicios.controller";

export const routerEjercicios = Router();

routerEjercicios.post("/tipo-ejercicios-add", addTipoEjercicios);
routerEjercicios.post("/ejercicios-add", addEjercicio);
// routerEjercicios.get("/ejercicios-show");
