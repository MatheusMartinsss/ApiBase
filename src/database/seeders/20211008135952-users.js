'use strict';

const bcrypt = require('bcrypt')

const password = 'admin';

const salt = 10;



module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hash = await bcrypt.hash(password, salt);
    await queryInterface.bulkInsert('users', [{
     
      name: 'admin',
      password: hash,
      email: 'admin@admin.com',
      created_at: new Date(),
      updated_at: new Date()

    }], {});

  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('users', null, {});

  }
};
