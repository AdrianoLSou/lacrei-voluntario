import { Request, Response } from "express";
import PROFISSOES from "../../../constants/profissoes";
import { cadastro, consultorio, dadosPessoais, dadosProfissionais, servicos, situacao } from "../../../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ENV from "../../../infra/config/env";
import { mailService } from "../../../services/mailService";

export const listarPendentes = async (req: Request, res: Response) => {
  const list = await cadastro.instance.findAll({
    where: { aprovado: null },
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
  })

  return res.status(200).json(list);
}

export const cadastrar = async (req: Request, res: Response) => {

  const { name, email, profissao, registro, senha } = req.body;

  if(!PROFISSOES.includes(profissao)) {
    return res.status(400).json({ error: "Sua profissao não é permitida" });
  }

  const achadoPorEmail = await cadastro.instance.findOne({ where: { email: email } });
  if(achadoPorEmail) {
    return res.status(400).json({ error: "Email já cadastrado" });
  }

  const achadoPorRegistro = await cadastro.instance.findOne({ where: { registro: registro } });
  if(achadoPorRegistro) {
    return res.status(400).json({ error: "Registro já cadastrado" });
  }

  const senhaHasheada = bcrypt.hashSync(senha, 10);

  const token = jwt.sign({
    email: email,
    name: name
  },
  ENV.SECRET);

  const newUser = await cadastro.instance.create({
    name,
    email,
    profissao,
    registro,
    senha: senhaHasheada,
    Situacao: {
      chave: token,
      situacao: 3,
    },
    dadosPessoais: {
      foto: null,
      fotoDescricao: null,
      sobre: null,
    },
    dadosProfissionais: {
      especialidade: null,
      carta: null,
      foto: null,
    },
    servicos: {
      nome: null,
      duracao: null,
      valor: null,
      tipoConsulta: null,
    },
    consultorio: {
      rua: null,
      numero: null,
      bairro: null,
      cidade: null,
      celular: null,
      fixo: null,
      whatsapp: null,
      tipoConsulta: null,
      acessibilidade: null,
      horarioFuncionamento: null,
      convenios: null,
    }
  }, {
    include: [
      situacao.instance,
      {
        model: dadosPessoais.instance,
        as: "dadosPessoais"
      },
      {
        model: dadosProfissionais.instance,
        as: "dadosProfissionais"
      },
      {
        model: servicos.instance,
        as: 'servicos',
      },
      {
        model: consultorio.instance,
        as: 'consultorio',
      }
    ]
  });

  mailService(email, name, `Oi ${name}, clique no link para confirmar seu cadastro: ${ENV.LINK_BASE}/cadastro/confirmar?chave=${token}`)
    .then(response => res.status(200).json({
      name,
      email,
      profissao,
      registro,
      msg: "Email de confirmação enviado!"
    }))
    .catch(err => res.status(500).json({ error: "Algo saiu errado, tente novamente" }))
}
