'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' })
    }
  }

  Place.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    company: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'The company field is required.'
        },
      }
    },
    job: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'The job field is required.'
        },
      }
    },
    year: DataTypes.STRING,
    assignment: DataTypes.STRING,
    show: {
      type: DataTypes.BOOLEAN,
      allowNull: {
        msg: 'The year field is required.'
      }
    }
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Place',
    tableName: 'places'
  })

  return Place
}
