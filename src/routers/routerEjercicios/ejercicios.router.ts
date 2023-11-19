import { Router } from "express";
import {
  addEjercicio,
  addTipoEjercicios,
  deleteTipoEjercicios,
  getAllTipoEjercicios,
  getOneTipoEjercicios,
  updateTipoEjercicios,
} from "../../controllers/controlEjercicios/controlEjercicios.controller";

export const routerEjercicios = Router();

// * Tipo Ejercicios
routerEjercicios.get("/tipo-ejercicios-show-all", getAllTipoEjercicios);
routerEjercicios.get("/tipo-ejercicios-show-one/:id", getOneTipoEjercicios);
routerEjercicios.post("/tipo-ejercicios-add", addTipoEjercicios);
routerEjercicios.put("/tipo-ejercicios-update", updateTipoEjercicios);
routerEjercicios.delete("/tipo-ejercicios-delete/:id", deleteTipoEjercicios);

// * Ejercicios
routerEjercicios.get("/ejercicios-add", addEjercicio);
routerEjercicios.get("/ejercicios-add", addEjercicio);
routerEjercicios.post("/ejercicios-add", addEjercicio);
routerEjercicios.put("/ejercicios-u[date", addEjercicio);
routerEjercicios.delete("/ejercicios-add", addEjercicio);
