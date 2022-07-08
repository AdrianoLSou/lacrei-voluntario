import { Router } from "express";
import authMiddleware from "../../../middlewares/Auth";
import * as CadastroController from "../controller/Cadastro";

const routes = Router();

routes.get("/perfil", authMiddleware.private, CadastroController.exibirPerfil);

export default routes;
