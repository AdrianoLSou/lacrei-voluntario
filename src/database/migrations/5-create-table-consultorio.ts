import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("consultorio", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      endereco_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    });
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("consultorio");
  },
};
