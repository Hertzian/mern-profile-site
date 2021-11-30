const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
dotenv.config()
const connectDB = require('./config/connectDB')
connectDB()
const app = express()

const usersRoutes = require('./routes/usersRoutes')
const placesRoutes = require('./routes/placesRoutes')
const skillsRoutes = require('./routes/skillsRoutes')
const projectsRoutes = require('./routes/projectsRoutes')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/public', express.static(path.join(__dirname, 'public')))

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

app.use('/api/users', usersRoutes)
app.use('/api/places', placesRoutes)
app.use('/api/skills', skillsRoutes)
app.use('/api/projects', projectsRoutes)

app.listen(
  process.env.PORT,
  console.log(
    `Server running on http://localhost:${process.env.PORT}, in ${process.env.NODE_ENV} mode`
  )
)
