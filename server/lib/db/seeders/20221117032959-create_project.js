'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'projects',
      [{
        name: 'test1',
        url: 'test1',
        repo: 'test1',
        image: 'test1',
        description: 'test1',
        show: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('projects', null)
  }
}
