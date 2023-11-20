import { Router } from "express";
import {
  addChequeo,
  getOneChequeo,
  updateChequeo,
} from "../../controllers/controlChequeos/controlChequeos.controller";

export const routerChequeos = Router();

routerChequeos.post("/add", addChequeo);
routerChequeos.get("/show-one/:id", getOneChequeo);
routerChequeos.put("/update", updateChequeo);
