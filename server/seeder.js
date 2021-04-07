const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./config/connectDB')

// load models
const User = require('./models/user')
const Skill = require('./models/skill')
const Place = require('./models/place')
const Project = require('./models/project')

// db connect
connectDB()

// read json files
const users = JSON.parse(
  fs.readFileSync(path.join(__dirname, '/config/_dummyData/user.json'), 'utf-8')
)
const skills = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '/config/_dummyData/skill.json'),
    'utf-8'
  )
)
const places = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '/config/_dummyData/place.json'),
    'utf-8'
  )
)
const projects = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '/config/_dummyData/project.json'),
    'utf-8'
  )
)

// import
const importData = async () => {
  try {
    await User.create(users)
    await Skill.create(skills)
    await Place.create(places)
    await Project.create(projects)

    console.log('Data imported')
    process.exit()
  } catch (err) {
    console.error(err)
  }
}

// destroy
const destroyData = async () => {
  try {
    await User.deleteMany()
    await Skill.deleteMany()
    await Place.deleteMany()
    await Project.deleteMany()

    console.log('Data destroyed')
    process.exit()
  } catch (err) {
    console.error(err)
  }
}

// pasing args
if (process.argv[2] === '-i') importData()
if (process.argv[2] === '-d') destroyData()
