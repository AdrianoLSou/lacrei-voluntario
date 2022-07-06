import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.addConstraint('cadastro', {
        fields: ['dadosPessoais_id'],
        type: 'foreign key',
        name: 'FK_dados_pessoais',
        references: {
          table: 'dados_pessoais',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }),
      queryInterface.addConstraint('cadastro', {
        fields: ['dadosProfissionais_id'],
        type: 'foreign key',
        name: 'FK_dados_profissionais',
        references: {
          table: 'dados_profissionais',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }),
      queryInterface.addConstraint('cadastro', {
        fields: ['consultorio_id'],
        type: 'foreign key',
        name: 'FK_consultorio',
        references: {
          table: 'consultorio',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }),
      queryInterface.addConstraint('cadastro', {
        fields: ['servicos_id'],
        type: 'foreign key',
        name: 'FK_servicos',
        references: {
          table: 'servicos',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }),
      queryInterface.addConstraint('consultorio', {
        fields: ['endereco_id'],
        type: 'foreign key',
        name: 'FK_endereco',
        references: {
          table: 'enderecos',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    ]);
  },
  down: (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.removeConstraint('cadastro', 'FK_dados_pessoais'),
      queryInterface.removeConstraint('cadastro', 'FK_dados_profissionais'),
      queryInterface.removeConstraint('cadastro', 'FK_consultorio'),
      queryInterface.removeConstraint('cadastro', 'FK_servicos'),
      queryInterface.removeConstraint('consultorio', 'FK_endereco'),
    ]);
  },
};
