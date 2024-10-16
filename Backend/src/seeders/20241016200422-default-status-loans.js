'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('status', [
      { id: 1, status: 'Pendiente' },
      { id: 2, status: 'Aprobado' },
      { id: 3, status: 'Devuelto' }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('status', null, {});
  }
};
