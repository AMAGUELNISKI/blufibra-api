'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'lead', 
        'fonte_id',
        { 
          type: Sequelize.INTEGER,
          references: {
            model: 'fonte',
            key: 'id',
          },
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'lead',
        'fonte_id'
      );
  }
};
