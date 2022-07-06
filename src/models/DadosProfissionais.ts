import { DataTypes } from "sequelize";
import Connection from "../database/Connection";

export class DadosProfissionais {
  instance: any;
  modelName: string = "DadosProfissionais";

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
        especialidade: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        carta: {
          type: DataTypes.STRING(300),
          allowNull: false,
        },
        foto: {
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
        tableName: "dados_profissionais",
      }
    );
  }
}
