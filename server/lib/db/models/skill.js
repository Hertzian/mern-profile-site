'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' })
    }
  }

  Skill.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.BOOLEAN,
      allowNull: {
        msg: 'The company field is required.'
      }
    },
    value: DataTypes.STRING,
    show: {
      type: DataTypes.BOOLEAN,
      allowNull: {
        msg: 'The company field is required.'
      }
    }
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Skill',
    tableName: 'skills'
  })

  return Skill
}
