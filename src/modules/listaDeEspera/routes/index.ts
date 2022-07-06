import { Router } from "express";
import * as ListaDeEsperaController from "../controller/ListaDeEspera";

const routes = Router();

routes.post("/", ListaDeEsperaController.add);

export default routes;
