import { Request, Response } from "express";
import PROFISSOES from "../../../constants/profissoes";
import { listaEspera } from "../../../models";

export const cadastrar = async (req: Request, res: Response) => {

  const { email, profissao } = req.body;

  if(!PROFISSOES.includes(profissao)) {
    return res.status(400).json({ error: "Sua profissao não é permitida" });
  }

  const novoCadastro = await listaEspera.instance.create({
    email: email,
    profissao: profissao
  });

  return res.status(200).json(novoCadastro);
}

