'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'places',
      [
        {
          company: 'test1',
          job: 'test1',
          year: '1900',
          assignment: 'test12',
          show: true,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          company: 'Dynamics',
          job: 'FullStack developer',
          year: '2019',
          assignment: 'test1',
          show: true,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          company: 'Dynamics',
          job: 'FullStack developer',
          year: '2019',
          assignment: 'test1',
          show: false,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          company: 'Dynamics',
          job: 'FullStack developer',
          year: '2019',
          assignment: 'test1',
          show: false,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('places', null)
  }
}
