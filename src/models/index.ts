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

enderecos.instance.hasOne(consultorio.instance, {
  constraint: true,
  foreignKey: "endereco_id"
});
consultorio.instance.belongsTo(enderecos.instance, {
  constraint: true,
  foreignKey: "endereco_id"
});

export {
  dadosPessoais,
  dadosProfissionais,
  enderecos,
  servicos,
  consultorio,
  cadastro,
  listaEspera,
};
