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
        rua: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        numero: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        bairro: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        cidade: {
          type: DataTypes.STRING(255),
          allowNull: true,
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
          allowNull: true,
        },
        acessibilidade: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        horarioFuncionamento: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        convenios: {
          type: DataTypes.STRING(300),
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
        tableName: "consultorio",
      }
    );
  }
}
