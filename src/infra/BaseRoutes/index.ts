import { Router } from "express";

import routesListaDeEspera from "../../modules/listaDeEspera/routes";
import routesPreCadastro from "../../modules/listaDeEspera/routes";

const routes = Router();

routes.use("/lista-de-espera", routesListaDeEspera);
routes.use("/pre-cadastro", routesPreCadastro);

export default routes;
