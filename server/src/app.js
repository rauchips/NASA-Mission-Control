const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
  res.send('NASA MISSION PROJECT')
})

module.exports = app
