import { Router } from "express";
import * as preCadastroController  from "../controller/PreCadastro";
import preCadastroValidator from "../validators/index";

const routes = Router();

routes.get("/lista-pendentes", preCadastroController.listarPendentes);
routes.post("/pre-cadastro", preCadastroValidator, preCadastroController.cadastrar);

export default routes;
