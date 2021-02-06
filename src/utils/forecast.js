const request=require('request')

const forecast=(lat, long, callback) => {
    const url='http://api.weatherstack.com/current?access_key=b1e51bb0c07ddc5c4cdb503519c1ccbc&query='+lat+','+long

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect weather services.', undefined)
        } else if (body.error) {
            callback('unable to find location.Try another location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+' degrees out. It feels like '+body.current.feelslike+' degrees out.'
            )
        }
    })
}

module.exports=forecast
