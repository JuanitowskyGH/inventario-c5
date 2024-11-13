'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('loans', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      loanDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: "id",
        },
      },
      statusId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'status',
          key: "id",
        },
      },
      // RELACION PARA OBTENER EL ID DEL USUARIO QUE APRUEBA EL PRESTAMO
      approvedBy: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: "id",
        },
      },
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('loans');
  }
};
