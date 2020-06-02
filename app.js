const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=da3dea83e76c2a6f6dcd44d72f7c80af&query=Noida&units=m'

request({url: url, json: true}, (error, response) => {
    
    if (error) {
        console.log('Unable to weather stack service')
    } else if(response.body.error) {
        console.log('Unable to find location')
    } else {
    const data = (response.body.current)
    console.log(data.weather_descriptions[0])
    console.log(`It is currently ${data.temperature} degrees out. It feels like ${data.feelslike}`)
    }
    
})

const url2= 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaW1yYW5qYWZyaTc4NiIsImEiOiJja2FxbXhmOG8wMWkwMnlxdDJqc3VvZTRiIn0.gCmM-ALmM7vPuTuc0JAkOg&limit=1'

request({url: url2, json: true}, (error, response) => { 

    if (error) {
        console.log('Unable to connect to mapbox services')
    } else if(response.body.features.length === 0) {
        console.log('Unable to fetch location currently')
    } else {
    const data = (response)
    const longi = data.body.features[0].center[0]
    const lat = data.body.features[0].center[1]
    console.log(`Latitude: ${lat} Longitude: ${longi}`)
    }
})
