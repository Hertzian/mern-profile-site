const path = require('path')
const express = require('express')
const morgan = require('morgan')
const fileupload = require('express-fileupload')
require('dotenv').config()
const { sequelize } = require('./lib/db/models')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// to store images
app.use('/public', express.static(path.join(__dirname, 'public')))

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

app.use(fileupload())
app.use('/api/users', require('./routes/usersRoutes'))
app.use('/api/places', require('./routes/placesRoutes'))
app.use('/api/skills', require('./routes/skillsRoutes'))
app.use('/api/projects', require('./routes/projectsRoutes'))

app.listen(
  process.env.PORT,
  async () => {
    console.log(`Server running on http://localhost:${process.env.PORT}, in ${process.env.NODE_ENV} mode`)
    await sequelize.authenticate()
    console.log('Database connected!')
  }
)
