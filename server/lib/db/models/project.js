'use strict'

const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate({ user }) {
      this.belongsTo(user, { foreignKey: 'userId' })
    }
  }

  Project.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    repo: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    show: DataTypes.BOOLEAN
  }, {
    sequelize,
    timestamps: true,
    modelName: 'project',
  })

  return Project
}