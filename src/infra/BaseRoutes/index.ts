import { Router } from "express";

import routesListaDeEspera from "../../modules/listaDeEspera/routes";
import routesPreCadastro from "../../modules/PreCadastro/routes";

const routes = Router();

routes.use(routesListaDeEspera);
routes.use(routesPreCadastro);

export default routes;
