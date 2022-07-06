import { mySqlConnection } from "../database";

import { DadosPessoais } from "./DadosPessoais";
import { Cadastro } from "./Cadastro";
import { Consultorio } from "./Consultorio";
import { DadosProfissionais } from "./DadosProfissionais";
import { Enderecos } from "./Endereco";
import { ListaEspera } from "./ListaEspera";
import { Servicos } from "./Servicos";

const dadosPessoais = new DadosPessoais(mySqlConnection);
const dadosProfissionais = new DadosProfissionais(mySqlConnection);
const enderecos = new Enderecos(mySqlConnection);
const servicos = new Servicos(mySqlConnection);
const consultorio = new Consultorio(mySqlConnection);
const cadastro = new Cadastro(mySqlConnection);
const listaEspera = new ListaEspera(mySqlConnection);

export {
  dadosPessoais,
  dadosProfissionais,
  enderecos,
  servicos,
  consultorio,
  cadastro,
  listaEspera,
};
