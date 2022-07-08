import { Request, Response } from "express";
import { cadastro } from "../../../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import ENV from "../../../infra/config/env";

export const logar = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  const hasUser = await cadastro.instance.findOne({ where: { email: email }});
  if(!hasUser) {
    return res.status(401).json("Credenciais invalidas");
  }

  const isValidPassword = await bcrypt.compare(senha, hasUser.senha);
  if(!isValidPassword) {
    return res.status(401).json("Credenciais invalidas");
  }

  if(hasUser.aprovado == false) {
    return res.status(401).json("Seu cadastro foi recusado!");
  }

  const token = jwt.sign({
    id: hasUser.id,
    email: hasUser.email,
    name: hasUser.name
  },
  ENV.SECRET, { expiresIn: '3d' });

  return res.status(200).json({ token })
}
