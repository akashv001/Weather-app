const request=require('request')

const geocode=(address, callback) => {
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYWthc2h2MTk5NyIsImEiOiJja2s1Mzh4YWMwM2ZkMndud2o4aWFxc3hmIn0.sjC0WvAALoV3-Ngm3q4m3w&limit=1'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to Location services!', undefined)
        } else if (body.features.length===0) {
            callback('Unable to find location.Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name,
            })
        }
    })
}

module.exports=geocode
