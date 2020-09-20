const mongoose = require('mongoose')

const rideSchema = new mongoose.Schema({
  letter: {type: String},
  distance: { type: mongoose.Types.Decimal128, required: true },
  topSpeed: {type: mongoose.Types.Decimal128, required: true},
})

const Ride = mongoose.model('Ride', rideSchema)

module.exports = Ride
