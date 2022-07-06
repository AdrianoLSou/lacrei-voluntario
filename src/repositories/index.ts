import PreCadastroRepository from "./pre-cadastro";
import { cadastro } from "../models";

const preCadastroRepository = new PreCadastroRepository(cadastro);

export { preCadastroRepository };
