import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("dados_pessoais", {
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
    });
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("dados_pessoais");
  },
};
