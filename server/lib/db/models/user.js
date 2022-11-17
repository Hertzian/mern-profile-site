'use strict'
const bcrypt = require('bcryptjs')

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ place, project, skill }) {
      this.hasMany(place, { foreignKey: 'userId', as: 'places' })
      this.hasMany(project, { foreignKey: 'userId', as: 'projects' })
      this.hasMany(skill, { foreignKey: 'userId', as: 'skills' })
    }
  }

  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    github: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    phone: DataTypes.STRING,
    bio: DataTypes.STRING,
    profession: DataTypes.STRING,
    email: DataTypes.STRING,
    background: DataTypes.STRING,
    portrait: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    timestamps: true,
    modelName: 'user',
  })

  return User
}