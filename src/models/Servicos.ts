import { DataTypes } from "sequelize";
import Connection from "../database/Connection";

export class Servicos {
  instance: any;
  modelName: string = "Servicos";

  constructor(conexao: Connection) {
    const con = conexao.getInstance();

    this.instance = con.define(
      this.modelName,
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        duracao: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        valor: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        tipoConsulta: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        createdAt: {
          type: DataTypes.DATE(),
        },
        updatedAt: {
          type: DataTypes.DATE(),
        },
      },
      {
        tableName: "servicos",
      }
    );
  }
}
