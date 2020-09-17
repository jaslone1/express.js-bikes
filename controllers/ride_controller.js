const express = require('express')
const rides = express.Router()
const Ride = require('../models/rides.js')

rides.get('/', (req, res) => {
  Ride.find({}, (error, allRides) => {
    res.send(index.ejs)
  })
})
