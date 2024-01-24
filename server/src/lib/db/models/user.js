'use strict'
const bcrypt = require('bcryptjs')

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Place, Project, Skill }) {
      this.hasMany(Place, { foreignKey: 'userId', as: 'places' })
      this.hasMany(Project, { foreignKey: 'userId', as: 'projects' })
      this.hasMany(Skill, { foreignKey: 'userId', as: 'skills' })
    }
  }

  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 255],
          msg: 'The name must contain between 3 and 255 chars.'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 255],
          msg: 'The name must contain between 3 and 255 chars.'
        }
      },
    },
    github: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    linkedin: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    phone: DataTypes.STRING,
    bio: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'The bio field is required.'
        }
      }
    },
    profession: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Invalid email.'
        }
      }
    },
    background: DataTypes.STRING,
    portrait: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6, 10],
          msg: 'This field must contain between 6 and 10 chars.'
        }
      }
    }
  }, {
    sequelize,
    timestamps: true,
    modelName: 'User',
    tableName: 'users',
    // defaultScope: {
    //   attributes: {
    //     exclude: ['password']
    //   }
    // }
  })

  return User
}
