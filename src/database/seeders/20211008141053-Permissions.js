'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('permissions', [{
      name: 'create_products',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'edit_products',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'delete_products',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'view_products',
      created_at: new Date(),
      updated_at: new Date()
    }],

      {});

  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('permissions', null, {});

  }
};
