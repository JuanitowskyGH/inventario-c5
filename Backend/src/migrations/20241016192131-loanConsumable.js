'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('loanConsumable', {
      loanId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'loans',
          key: 'id',
        },
      },
      consumableId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'consumables',
          key: 'id',
        }
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('loanConsumable');
  }
};
