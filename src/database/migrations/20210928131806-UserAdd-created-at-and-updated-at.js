'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'users',
        'created_at',
        {
          type: Sequelize.DATE,
          allowNull: false,
        }
      ),
      queryInterface.addColumn(
        'users',
        'updated_at',
        {
          type: Sequelize.DATE,
          allowNull: false,
        }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('users', 'created_at'),
      queryInterface.removeColumn('users', 'updated_at')
    ]);
  }
};