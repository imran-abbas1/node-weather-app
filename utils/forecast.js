const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=da3dea83e76c2a6f6dcd44d72f7c80af&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=m'

    request({url, json: true}, (error, {body}) => {
    
            if (error) {
                callback('Unable to weather stack service', undefined)
            } else if(body.error) {
                callback('Unable to find location', undefined)
            } else {
                const data = (body.current)
            //     console.log(data.weather_descriptions[0])
            // console.log(response.body.current.weather_descriptions[0])
             callback(undefined, `It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike}`)
            }
            
        })
        

}

module.exports = forecast