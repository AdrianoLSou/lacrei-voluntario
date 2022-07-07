import { Router } from "express";
import * as AuthController from "../controller/Auth";

const routes = Router();

routes.post("/login", AuthController.logar);

export default routes;
