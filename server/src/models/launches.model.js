const launches = new Map()

const launch = {
  flightNumber: 100,
  mission: 'SPACE X',
  rocket: 'Explorer IS1',
  launchDate: new Date('March 16, 2030'),
  destination: 'Kepler-1652 b',
  customer: ['ZTM', 'NASA', 'Space X'],
  upcoming: true,
  success: true
}

launches.set(launch.flightNumber, launch)

function getAllLaunches () {
  return Array.from(launches)
}

module.exports = {
  getAllLaunches
}
