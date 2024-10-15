'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('consumables', 'etiqueta');
  },

  async down (queryInterface, Sequelize) {
    // Aquí debes agregar la columna de nuevo en caso de revertir la migración
    await queryInterface.addColumn('consumables', 'etiqueta', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isNumeric: true,
      },
    });
  }
};
