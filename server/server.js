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

app.use(express.json())
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use('/api/users', usersRoutes)
app.use('/api/places', placesRoutes)
app.use('/api/skills', skillsRoutes)
app.use('/api/projects', projectsRoutes)

app.listen(
  process.env.PORT,
  console.log(
    `Server running on port ${process.env.PORT}, in ${process.env.NODE_ENV} mode`
  )
)
