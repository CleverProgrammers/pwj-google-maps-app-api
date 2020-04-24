const axios = require('axios');

const googleMapsURL = 'https://maps.googleapis.com/maps/api/geocode/json';

class GoogleMaps {
    async getCoordinates(zipCode) {
        let coordinates = [];
        await axios.get(googleMapsURL, {
            params: {
                address: zipCode,
                key: process.env.GOOGLE_MAPS_API_KEY
            }
        }).then((response)=>{
            const data = response.data;
            coordinates = [
                data.results[0].geometry.location.lng,
                data.results[0].geometry.location.lat
            ]
        }).catch((error)=>{
            throw new Error(error);
        })
        
        return coordinates;
    }
}

module.exports = GoogleMaps;