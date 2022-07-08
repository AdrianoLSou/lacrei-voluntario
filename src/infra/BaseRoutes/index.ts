import { Router } from "express";

import routesListaDeEspera from "../../modules/listaDeEspera/routes";
import routesPreCadastro from "../../modules/PreCadastro/routes";
import routesAuth from "../../modules/Auth/routes";
import routesCadastro from "../../modules/Cadastro/routes";

const routes = Router();

routes.use(routesListaDeEspera);
routes.use(routesPreCadastro);
routes.use(routesAuth);
routes.use(routesCadastro);

export default routes;
