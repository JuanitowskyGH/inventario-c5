'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('registers', 'marca', {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "Sin marca",
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('registers', 'marca', {
      type: Sequelize.STRING,
        allowNull: false,
    });
  }
};
