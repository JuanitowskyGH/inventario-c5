const Sequelize = require('sequelize');
const sequelize = require('../../../database/database');

const LoanConsumable = sequelize.define('loanConsumable', {
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
    },
    createdAt: {
      type: Sequelize.DATEONLY,
      defaultValue: Sequelize.NOW,
    },
  },
});

module.exports = LoanConsumable;