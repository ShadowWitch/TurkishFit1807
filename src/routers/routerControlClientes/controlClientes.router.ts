import { Router } from "express";
import {
  addClientes,
  deleteClientes,
  getAllClientes,
  getOneClientes,
} from "../../controllers/controlClientes/controlClientes.controller";

export const routerControlClientes = Router();

// * Clientes
routerControlClientes.get("/show-all", getAllClientes);
routerControlClientes.get("/show-one/:id", getOneClientes);
routerControlClientes.post("/add", addClientes);
routerControlClientes.delete("/delete/:id", deleteClientes);

routerControlClientes.put("/update", addClientes);
