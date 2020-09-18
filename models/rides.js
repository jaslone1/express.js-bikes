const mongoose = require('mongoose')

const rideSchema = new mongoose.Schema({
  date: { type: String, required: true },
  distance: { type: Number, required: true },
  topSpeed: {type: Number, required: true},
})

const Ride = mongoose.model('Ride', rideSchema)

module.exports = Ride
