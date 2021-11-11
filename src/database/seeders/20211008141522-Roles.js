'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('roles', [{

      name: 'SUPER_ROLE',
      created_at: new Date(),
      updated_at: new Date()

    }],{});
 
  },
  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('roles', null, {});

  }
};
