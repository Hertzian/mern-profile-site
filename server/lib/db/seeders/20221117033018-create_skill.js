'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'skills',
      [{
        name: 'test1',
        value: 'test1',
        show: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('skills', null)
  }
}
