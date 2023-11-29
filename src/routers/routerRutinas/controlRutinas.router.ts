import { Router } from "express";
import {
  addEjercicio,
  addRELClienteRutina,
  addRELEjercicioRutina,
  addRutina,
  getAllRutinas,
} from "../../controllers/controlRutinas/controlRutinas.controller";

export const routerRutinas = Router();

//* Registrar una rutina
routerRutinas.post("/add", addRutina);
routerRutinas.get("/show-all", getAllRutinas);

// * Asignar ejercicio a rutina
routerRutinas.post("/add-ejercicio-rutina", addRELEjercicioRutina);
// * Asignar rutina a cliente
routerRutinas.post("/add-rutina-cliente", addRELClienteRutina);

//* Registrar un ejercicio
routerRutinas.post("/add-ejercicio", addEjercicio);
