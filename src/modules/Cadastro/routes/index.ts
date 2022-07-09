import { Router } from "express";
import authMiddleware from "../../../middlewares/Auth";
import * as CadastroController from "../controller/Cadastro";
import multer from "multer";
const { uuid } = require('uuidv4')

const upload = multer({
  storage: multer.diskStorage({
    destination: 'images/',
    filename(req, file, callback) {
      const fileName = `${uuid()}-${file.originalname}`

      return callback(null, fileName)
    },
  }),
})

const routes = Router();

routes.get("/perfil", authMiddleware.private, CadastroController.exibirPerfil);
routes.post("/cadastro", authMiddleware.private, upload.fields([{ name: 'fotoPerfil'}, { name: 'fotoProfissional' }]), CadastroController.cadastrar);
routes.get("/cadastro/confirmar", CadastroController.confirmar);

export default routes;
