import PreCadastroController from "./PreCadastro";
import { preCadastroUseCase } from "../useCases/";


const preCadastroController = new PreCadastroController(preCadastroUseCase);

export { preCadastroController };
