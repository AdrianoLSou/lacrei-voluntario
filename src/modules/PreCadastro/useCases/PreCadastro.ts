import { Request, Response } from "express";
import IRepository from "../../../repositories/IRepository";

export default class PreCadastroUseCase {
  private repository: IRepository;

  constructor(CadastroRepository: IRepository) {
    this.repository = CadastroRepository;
  }


  async listarTodos() {
    const lista = this.repository.findAll();
    return lista;
  }
}
