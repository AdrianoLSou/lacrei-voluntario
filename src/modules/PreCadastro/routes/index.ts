import { Router } from "express";
import { preCadastroController } from "../controller";

const routes = Router();

routes.get("/pre-cadastro", preCadastroController.findAll);

export default routes;
