import PreCadastroUseCase from "./pre-cadastro";
import { preCadastroRepository } from "../repositories/";

const preCadastroUseCase = new PreCadastroUseCase(preCadastroRepository);

export {
  preCadastroUseCase,
}
