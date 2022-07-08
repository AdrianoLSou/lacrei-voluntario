import { Request, Response } from "express";
import PROFISSOES from "../../../constants/profissoes";
import { cadastro, consultorio, dadosPessoais, dadosProfissionais, servicos } from "../../../models";
import bcrypt from "bcryptjs";

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

  const newUser = await cadastro.instance.create({
    name,
    email,
    profissao,
    registro,
    senha: senhaHasheada
  })

  return res.status(201).json({ name, email, profissao, registro });
}
