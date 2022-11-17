'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    static associate({ user }) {
      this.belongsTo(user, { foreignKey: 'userId' })
    }
  }

  Skill.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    value: DataTypes.STRING,
    show: DataTypes.BOOLEAN
  }, {
    sequelize,
    timestamps: true,
    modelName: 'skill',
  })

  return Skill
}