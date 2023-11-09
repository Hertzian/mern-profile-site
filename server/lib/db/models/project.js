'use strict'

const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' })
    }
  }

  Project.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.BOOLEAN,
      allowNull: {
        msg: 'The name field is required.'
      }
    },
    url: DataTypes.STRING,
    repo: DataTypes.STRING,
    image: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    description: DataTypes.STRING,
    show: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Project',
    tableName: 'projects'
  })

  return Project
}
