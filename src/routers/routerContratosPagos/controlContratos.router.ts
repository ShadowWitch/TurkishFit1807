import { Router } from "express";
import {
  addContrato,
  deleteContrato,
  getOneContrato,
  renovarContrato,
  updateContrato,
} from "../../controllers/controlContratosPagos/controlContratos.controller";

export const routerContratoPagos = Router();

// * Contratos
routerContratoPagos.get("/show-one", getOneContrato);
routerContratoPagos.post("/add", addContrato);
routerContratoPagos.put("/update", updateContrato);
routerContratoPagos.put("/renew", renovarContrato);

// routerContratoPagos.delete("/delete", deleteContrato);
