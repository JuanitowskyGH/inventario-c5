'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashPass = await bcrypt.hash('admin', 8);
    await queryInterface.bulkInsert('users', [

      {
      id: 1,
      nombre: "Admin_name",
      apellidop: "Admin_ap",
      apellidom: "Admin_am",
      username: "admin",
      password: hashPass,
      roleId: 1,
      createdBy: null, 
      createdAt: new Date(), 
      updatedAt: new Date()
      }
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
