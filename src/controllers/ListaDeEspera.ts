import { Request, Response } from "express";
import { listaEspera } from "../models"

export const add = (req: Request, res: Response) => {
  const { email, profissao } = req.body;

  const newL = new listaEspera.instance({
    email: email,
    profissao: profissao
  })

  console.log(email, profissao);


  newL.save();

  return res.status(200).json(newL);
}

