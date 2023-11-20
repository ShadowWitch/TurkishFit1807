import { Router } from "express";
import {
  addContrato,
  deleteContrato,
  getOneContrato,
  updateContrato,
} from "../../controllers/controlContratosPagos/controlContratos.controller";

export const routerContratoPagos = Router();

// * Contratos
routerContratoPagos.get("/contrato-show", getOneContrato);
routerContratoPagos.post("/contrato-add-one", addContrato);
routerContratoPagos.put("/contrato-update-one", updateContrato);
routerContratoPagos.delete("/contrato-delete-one", deleteContrato);
