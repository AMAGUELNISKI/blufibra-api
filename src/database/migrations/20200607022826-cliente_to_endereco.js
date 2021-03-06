'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'endereco',
        'cliente_id',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'cliente',
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
      'endereco',
      'cliente_id'
    );
  }
};