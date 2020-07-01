'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'telefone',
        'tipo_contato_id',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'tipo_contato',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: false,
        }
      )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'telefone',
      'tipo_contato_id'
    );
  }
};