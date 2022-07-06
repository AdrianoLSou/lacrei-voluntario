import { DataTypes } from "sequelize";
import Connection from "../database/Connection";

export class Consultorio {
  instance: any;
  modelName: string = "Consultorio";

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
        endereco_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: { model: "enderecos", key: "id" }
        },
        celular: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        fixo: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        whatsapp: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        tipoConsulta: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        acessibilidade: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        horarioFuncionamento: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        convenios: {
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
        tableName: "consultorio",
      }
    );
  }
}
