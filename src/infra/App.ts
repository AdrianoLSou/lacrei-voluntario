import Express, { Application } from "express";
import cors from "cors";
import { mySqlConnection } from "../database";

import handleError from "../middlewares/handleError";
import BaseRoutes from "./BaseRoutes";

type SetupOptions = {
  isTest?: boolean;
  port?: number;
};
export default class App {
  private instance: Application;
  private defaultPort: number = 4000;

  constructor() {
    this.instance = Express();
  }

  async setup(options: SetupOptions): Promise<void> {
    const selectedPort = options.port ? options.port : this.defaultPort;
    this.instance.use(cors());
    this.instance.use(Express.json());
    this.instance.use('/api-docs', Express.static('src/docs'));
    this.instance.use('/images', Express.static('images'))
    this.instance.use(BaseRoutes);
    this.instance.use(handleError);

    mySqlConnection.hasConection();

    if (options.isTest) return;

    this.instance.listen(selectedPort, () =>
      console.log(`Servidor rodando na porta: ${selectedPort}`)
    );
  }

  getInstance() {
    return this.instance;
  }
}
