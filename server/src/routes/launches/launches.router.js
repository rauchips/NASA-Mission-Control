const express = require('express')
const lanuchesRouter = express.Router()

const { httpGetAllLaunches } = require('./launches.controller')

lanuchesRouter.get('/launches', httpGetAllLaunches)

module.exports = lanuchesRouter
