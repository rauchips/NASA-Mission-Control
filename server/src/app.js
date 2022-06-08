const express = require('express')
const cors = require('cors')

const planetRouter = require('./routes/planets/planets.router')

const app = express()

app.use(cors({
  origine: 'http://localhost:5000'
}))
app.use(planetRouter)

module.exports = app
