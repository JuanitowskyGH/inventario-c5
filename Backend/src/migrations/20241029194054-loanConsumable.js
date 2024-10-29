'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('loanConsumable', {
      loanId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'loans',
          key: 'id',
        },
        allowNull: false,
      },
      consumableId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'consumables',
          key: 'id',
        },
        allowNull: false,
      }
    }, {
      tableName: 'loanConsumable',
      timestamps: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('loanConsumable');
  }
};