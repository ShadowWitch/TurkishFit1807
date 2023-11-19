import { Router } from "express";
import {
  addEjercicio,
  addTipoEjercicios,
  deleteEjercicios,
  deleteTipoEjercicios,
  getAllEjercicios,
  getAllTipoEjercicios,
  getOneEjercicios,
  getOneTipoEjercicios,
  updateEjercicios,
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
routerEjercicios.get("/ejercicios-show-all", getAllEjercicios);
routerEjercicios.get("/ejercicios-show-one/:id", getOneEjercicios);
routerEjercicios.post("/ejercicios-add", addEjercicio);
routerEjercicios.put("/ejercicios-update", updateEjercicios);
routerEjercicios.delete("/ejercicios-delete/:id", deleteEjercicios);
