const request = require('request')
 
const url = 'http://api.weatherstack.com/current?access_key=5f154b82bee55667dd4ebf69eca79e12&query=New%20York'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})