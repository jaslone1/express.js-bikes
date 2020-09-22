const mongoose = require('mongoose')


const rideSchema = new mongoose.Schema({
  username: {type: String},
  time: {type: mongoose.Types.Decimal128, required: true },
  topSpeed: {type: mongoose.Types.Decimal128, required: true},
})

const Ride = mongoose.model('Ride', rideSchema)

module.exports = Ride
