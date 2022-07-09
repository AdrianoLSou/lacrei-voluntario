import { mySqlConnection } from "../database";

import { DadosPessoais } from "./DadosPessoais";
import { Cadastro } from "./Cadastro";
import { Consultorio } from "./Consultorio";
import { DadosProfissionais } from "./DadosProfissionais";
import { ListaEspera } from "./ListaEspera";
import { Servicos } from "./Servicos";
import { Situacao } from "./Situacao";

const dadosPessoais = new DadosPessoais(mySqlConnection);
const dadosProfissionais = new DadosProfissionais(mySqlConnection);
const servicos = new Servicos(mySqlConnection);
const consultorio = new Consultorio(mySqlConnection);
const cadastro = new Cadastro(mySqlConnection);
const listaEspera = new ListaEspera(mySqlConnection);
const situacao = new Situacao(mySqlConnection);

dadosPessoais.instance.hasOne(cadastro.instance, {
  constraint: true,
  foreignKey: "dadosPessoais_id",
  as: "dadosPessoais"
});
cadastro.instance.belongsTo(dadosPessoais.instance, {
  constraint: true,
  foreignKey: "dadosPessoais_id",
  as: "dadosPessoais"
});

dadosProfissionais.instance.hasOne(cadastro.instance, {
  constraint: true,
  foreignKey: "dadosProfissionais_id",
  as: "dadosProfissionais"
});
cadastro.instance.belongsTo(dadosProfissionais.instance, {
  constraint: true,
  foreignKey: "dadosProfissionais_id",
  as: "dadosProfissionais"
});

servicos.instance.hasOne(cadastro.instance, {
  constraint: true,
  foreignKey: "servicos_id",
  as: "servicos",
});
cadastro.instance.belongsTo(servicos.instance, {
  constraint: true,
  foreignKey: "servicos_id",
  as: "servicos",
});

consultorio.instance.hasOne(cadastro.instance, {
  constraint: true,
  foreignKey: "consultorio_id",
  as: "consultorio",
});
cadastro.instance.belongsTo(consultorio.instance, {
  constraint: true,
  foreignKey: "consultorio_id",
  as: "consultorio",
});

situacao.instance.hasOne(cadastro.instance, {
  constraint: true,
  foreignKey: "situacao_id"
});
cadastro.instance.belongsTo(situacao.instance, {
  constraint: true,
  foreignKey: "situacao_id"
});

export {
  dadosPessoais,
  dadosProfissionais,
  servicos,
  consultorio,
  cadastro,
  listaEspera,
  situacao,
};
