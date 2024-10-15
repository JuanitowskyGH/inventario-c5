'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Modificar la columna 'marca'
    await queryInterface.changeColumn('consumables', 'marca', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "Sin marca",
    });

    // Agregar una nueva columna 'descripcion'
    await queryInterface.addColumn('consumables', 'disponible', {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    });
  },

  async down (queryInterface, Sequelize) {
    // Revertir la modificación de la columna 'marca'
    await queryInterface.changeColumn('consumables', 'marca', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    // Eliminar la columna 'descripcion'
    await queryInterface.removeColumn('consumables', 'disponible');
  }
};
