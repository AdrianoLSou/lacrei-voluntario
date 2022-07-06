import { Request, Response } from "express";
import IRepository from "../../../repositories/IRepository";
import { preCadastroUseCase } from "../useCases";
import PreCadastroUseCase from "../useCases/PreCadastro"

export default class PreCadastro {

  private useCase: PreCadastroUseCase;

  constructor(useCase: PreCadastroUseCase){
    this.useCase = useCase;
  }

  async findAll(req: Request, res: Response) {
    const list = await preCadastroUseCase.listarTodos();

    return res.status(200).json(list);
  }
}
