'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('registers', 'etiqueta', {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          isNumeric: true,
        },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('registers', 'etiqueta', {
      type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isNumeric: true,
        },
    });
  }
};
