import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("cadastro", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false,
      },
      profissao: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      registro: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
      },
      senha: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      aprovado: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      dadosPessoais_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      dadosProfissionais_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      consultorio_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      servicos_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      situacao_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE(),
      },
      updatedAt: {
        type: DataTypes.DATE(),
      },
    });
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("cadastro");
  },
};
