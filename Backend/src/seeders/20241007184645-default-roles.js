'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [
      { id: 1, name: 'Administrador', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Moderador', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Lector', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
