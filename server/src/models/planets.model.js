/* eslint-disable dot-notation */
const { parse } = require('csv-parse')
const fs = require('fs')
const path = require('path')

const habitablePlanets = []

const isHabitable = (planet) => {
  return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6
}

function loadPlanetsData () {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '../../data/kepler_data.csv'))
      .pipe(parse({
        comment: '#',
        columns: true
      }))
      .on('data', (data) => {
        if (isHabitable(data)) {
          habitablePlanets.push(data)
        }
      })
      .on('error', (err) => {
        console.error(err)
        reject(err)
      })
      .on('end', () => {
        resolve()
        console.log(habitablePlanets.length)
      })
  })
}

module.exports = {
  planets: habitablePlanets,
  loadPlanetsData
}
