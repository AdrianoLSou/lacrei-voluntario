import { DataTypes } from "sequelize";
import Connection from "../database/Connection";

export class DadosPessoais {
  instance: any;
  modelName: string = "DadosPessoais";

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
        foto: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        fotoDescricao: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        sobre: {
          type: DataTypes.STRING(300),
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
        tableName: "dados_pessoais",
      }
    );
  }
}
