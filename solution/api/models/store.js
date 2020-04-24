const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    storeName: String,
    phoneNumber: String,
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    address: {},
    openStatustext: String,
    addressLines: Array
});

storeSchema.index({ location: '2dsphere' }, { sparse: true });

module.exports = mongoose.model('Store', storeSchema);