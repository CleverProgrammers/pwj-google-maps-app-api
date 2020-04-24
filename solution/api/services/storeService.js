
const Store = require('../models/store');
const GoogleMaps = require('../services/googleMapsService');
const googleMaps = new GoogleMaps();

class StoreService {

    async getStoresNear(zipCode) {
        let coordinates = await googleMaps.getCoordinates(zipCode);
        let results = await Store.find({
            location: {
             $near: {
              $maxDistance: 3218,
              $geometry: {
                type: "Point",
                coordinates: coordinates
              }
             }
            }
        });
        return results;
    }

}

module.exports = StoreService;