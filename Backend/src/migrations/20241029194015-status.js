'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('status', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    }, {
      timestamps: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('status');
  }
};