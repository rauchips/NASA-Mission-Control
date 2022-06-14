const express = require('express')
const planetRouter = express.Router()

const { httGetAllPlanets } = require('./planets.controller')

planetRouter.get('/planets', httGetAllPlanets)

module.exports = planetRouter
