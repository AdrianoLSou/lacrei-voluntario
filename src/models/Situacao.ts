import { DataTypes } from "sequelize";
import Connection from "../database/Connection";

export class Situacao {
  instance: any;
  modelName: string = "Situacao";

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
        chave: {
          type: DataTypes.STRING(300),
          allowNull: true,
        },
        situacao: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE(),
        },
        updatedAt: {
          type: DataTypes.DATE(),
        },
      },
      {
        tableName: "situacao",
      }
    );
  }
}
