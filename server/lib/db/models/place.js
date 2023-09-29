'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    static associate ({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' })
    }
  }

  Place.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    company: DataTypes.STRING,
    job: DataTypes.STRING,
    year: DataTypes.STRING,
    assignment: DataTypes.STRING,
    show: DataTypes.BOOLEAN
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Place',
    tableName: 'places'
  })

  return Place
}
