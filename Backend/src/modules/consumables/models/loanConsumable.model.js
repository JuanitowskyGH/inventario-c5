const Sequelize = require('sequelize');
const sequelize = require('../../../database/database');
const Loan = require('./loans.model');
const Consumable = require('./consumable.model');

const LoanConsumable = sequelize.define('loanConsumable', {
  loanId: {
    type: Sequelize.INTEGER,
    references: {
      model: Loan,
      key: 'id',
    },
  },
  consumableId: {
    type: Sequelize.INTEGER,
    references: {
      model: Consumable,
      key: 'id',
    },
  },
}, {
  tableName: 'loanConsumable',
  timestamps: false,
});

module.exports = LoanConsumable;