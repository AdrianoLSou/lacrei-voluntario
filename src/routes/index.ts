import { Router } from "express";
import { preCadastroController } from "../controllers/";
import * as ListaDeEsperaController from "../controllers/ListaDeEspera";

const routes = Router();

routes.get("/pre-cadastro", preCadastroController.findAll);
routes.post("/lista-espera", ListaDeEsperaController.add);

export default routes;
