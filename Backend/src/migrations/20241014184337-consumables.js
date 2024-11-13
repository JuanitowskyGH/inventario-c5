'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('consumables', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "S/M",
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "S/M",
      },
      serie: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "S/N",
      },
      responsable: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      disponible: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      imagen: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdBy: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: "id",
        },
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('consumables');
  }
};
