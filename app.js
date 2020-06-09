const request = require('postman-request')
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if (!address) {
  return console.log('Please provide an address')
} else {
geoCode(address , (error, data) => {
  
  if (error) {
      return console.log('ERROR : ' , error)
  }
  
forecast(data.latitude, data.longitude, (error, forecastData) => {
  if (error) {
    return console.log('ERROR : ' , error)
}
    console.log(data.location)
    console.log(forecastData)
})
})
}