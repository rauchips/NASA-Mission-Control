const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const path = require('path')

const planetRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/launches/launches.router')

const app = express()

app.use(cors({
  origine: 'http://localhost:5000'
}))

app.use(morgan('combined'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../public')))

app.use(planetRouter)
app.use(launchesRouter)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = app
