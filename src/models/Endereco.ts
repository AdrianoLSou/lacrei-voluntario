import { DataTypes } from "sequelize";
import Connection from "../database/Connection";

export class Enderecos {
  instance: any;
  modelName: string = "Enderecos";

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
        rua: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        numero: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        bairro: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        cidade: {
          type: DataTypes.STRING(255),
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
        tableName: "enderecos",
      }
    );
  }
}
