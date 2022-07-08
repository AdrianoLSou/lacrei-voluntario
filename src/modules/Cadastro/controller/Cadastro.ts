import { Request, Response } from "express";
import { cadastro, consultorio, dadosPessoais, dadosProfissionais, enderecos, servicos } from "../../../models";

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

