import { Request, Response } from "express";
import multer from "multer";
import { uuid } from 'uuidv4';
import jwt from "jsonwebtoken";

interface MulterPayload {
  filename: string;
  size: number;
}

interface TokenPayload {
  id: string;
  email: string;
  name: string;
  iat: number;
  exp: number;
}

import { cadastro, consultorio, dadosPessoais, dadosProfissionais, servicos, situacao } from "../../../models";
import ENV from "../../../infra/config/env";


export const exibirPerfil = async (req: Request, res: Response) => {

  const perfil = await cadastro.instance.findByPk(req.userId, {
    attributes: {
      exclude: ['senha', 'dadosPessoais_id', 'dadosProfissionais_id', 'consultorio_id', 'servicos_id']
    },
    include: [
      {
        model: dadosPessoais.instance,
        as: "dadosPessoais",
        attributes: ["foto", "fotoDescricao", "sobre"]
      },
      {
        model: dadosProfissionais.instance,
        as: "dadosProfissionais",
        attributes: ["especialidade", "carta", "foto"]
      },
      {
        model: consultorio.instance,
        as: "consultorio",
        attributes: [

          "celular", "fixo", "whatsapp", "tipoConsulta", "acessibilidade", "horarioFuncionamento", "convenios"]
      },
      {
        model: servicos.instance,
        as: "servicos",
        attributes: ["nome", "duracao", "valor", "tipoConsulta"]
      },
    ]
  });


  if(!perfil) {
    return res.status(400).json({ error: "Algo saiu errado :C" });
  }

  return res.status(200).json(perfil);
}

export const cadastrar = async (req: Request, res: Response) => {
  const {
    fotoPerfil, fotoDescricao, sobre,   //Dados Pessoais
    especialidade, carta, fotoProfissional,   //Dados Profissionais      especialidade vem do banco
    rua, numero, bairro, cidade,  //Endereco
    celular, fixo, whatsapp, tipoConsulta, acessibilidade, horarioFuncionamento, convenios, //Consultorio
    nome, duracao, valor, tipoConsultaServico
  } = req.body;

  //const { filename, size } = req.file as MulterPayload;

  console.log(req.files["fotoPerfil"][0].filename);


  const hasUser = await cadastro.instance.findByPk(req.userId);
  if(hasUser.aprovado != 1) {
    return res.status(200).json({ error: "Seu cadastro ainda não foi confirmado/aprovado" });
  }

  const dadosPessoais_s = await dadosPessoais.instance.update({
    foto: req.files["fotoPerfil"][0].filename,
    fotoDescricao,
    sobre,
  }, { where: { id: hasUser.dadosPessoais_id } });



  const dadosProfissionais_s = await dadosProfissionais.instance.update({
    especialidade: hasUser.profissao,
    carta,
    foto: req.files["fotoProfissional"][0].filename,
  }, { where: { id: hasUser.dadosProfissionais_id } });



  const consultorio_s = await consultorio.instance.update({
    rua, numero, bairro, cidade,
    celular, fixo, whatsapp, tipoConsulta, acessibilidade, horarioFuncionamento, convenios
  }, { where: { id: hasUser.consultorio_id } });

  const servicos_s = await servicos.instance.update({
    nome,
    duracao,
    valor,
    tipoConsulta: tipoConsultaServico
  }, { where: { id: hasUser.servicos_id } });

  return res.status(200).json({ msg: "salvo com sucesso", user: hasUser });
}

export const confirmar = async (req: Request, res: Response) => {
  const { chave } = req.query;

  if(!chave) {
    return res.status(400).json({ erro: "Endereco de confirmação invalido!" })
  }

  const usuarioSit = await situacao.instance.findOne({ where: { chave: chave } });

  if(!usuarioSit) {
    return res.status(400).json({ erro: "Endereco de confirmação invalido!" })
  }

  if(usuarioSit.situacao == 1){
    return res.status(400).json({ erro: "Usuario já aprovado!" })
  }

  if(usuarioSit.situacao == 2){
    return res.status(400).json({ erro: "Algo saiu errado, verifique o link" })
  }

  const data = jwt.verify(chave as string, ENV.SECRET);
  const { id, name, email } = data as TokenPayload;

  const userFinded = await cadastro.instance.findOne({ where: { email } });
  if(!userFinded){
    return res.status(500).json({ error: "Algo saiu errado, tente novamente" });
  }

  userFinded.aprovado = 1;

  usuarioSit.situacao = 1;
  usuarioSit.chave = null;

  await usuarioSit.save();
  await userFinded.save();

  return res.status(200).json({ msg: "Cadastro confirmado com sucesso" })
}
