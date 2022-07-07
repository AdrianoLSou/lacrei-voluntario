import { Router } from "express";
import * as ListaDeEsperaController from "../controller/ListaDeEspera";
import ListaDeEsperaValidator from "../validators";

const routes = Router();

routes.post("/lista-espera", ListaDeEsperaValidator, ListaDeEsperaController.cadastrar);

export default routes;
