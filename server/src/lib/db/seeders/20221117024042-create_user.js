'use strict'
const bcrypt = require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'users',
      [{
        name: 'test1',
        lastName: 'test1',
        github: 'test1.github.com',
        linkedin: 'test1.linkedin.com',
        phone: '123456-123456',
        bio: 'this is my bio...',
        profession: 'random words...',
        email: 'test@test.com',
        background: 'background-image.jpg',
        portrait: 'portrait-image-123.jpg',
        password: await bcrypt.hash('123456', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null)
  }
}
