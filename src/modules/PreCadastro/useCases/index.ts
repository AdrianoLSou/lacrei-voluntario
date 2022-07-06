import PreCadastroUseCase from "./PreCadastro";
import { preCadastroRepository } from "../../../repositories";

const preCadastroUseCase = new PreCadastroUseCase(preCadastroRepository);

export {
  preCadastroUseCase,
}
