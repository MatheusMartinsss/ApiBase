'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phonenumber:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      street:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      number:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      reference:{
        type: Sequelize.TEXT,
        allowNull: true
      },
      note:{
        type: Sequelize.TEXT,
        allowNull: true
      },
      value_subtotal: {
        type: Sequelize.DECIMAL(10, 3),
        allowNull: false,
        defaultValue: 0.00
      },
      value_delivery: {
        type: Sequelize.DECIMAL(10, 3),
        allowNull: true,
        defaultValue: 0.00
      },
      value_total: {
        type: Sequelize.DECIMAL(10, 3),
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM,
        values: ['pending', 'canceled', 'production', 'delivered', 'confirmed', 'outfordelivery'],
        defaultValue: 'pending'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable('orders');

  }
};
