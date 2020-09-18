const express = require('express')
const rides = express.Router()
const Ride = require('../models/rides.js')

//index
rides.get('/', (req, res) => {
  Ride.find({}, (error, allRides)=> {
    res.render('index.ejs', {
      rides: allRides
    })
  })
})

//new
rides.get('/new', (req, res) =>{
  res.render('new.ejs')
})

//edit
rides.get('/:id/edit', (req,res) => {
  Ride.findById(req.params.id, (error, foundRide) => {
    res.render('edit.ejs', {
      ride: foundRide
    })
  })
})

//delete
rides.delete('/:id', (req, res) => {
  Ride.findByIdAndRemove(req.params.id, (error, deletedRide) => {
    res.redirect('/rides')
  })
})

//Show
rides.get('/:id', (req, res) => {
  Ride.findById(req.params.id, (error, foundRide) => {
    res.render('show.ejs', {
      ride: foundRide
    })
  })
})

//update
rides.put('/:id', (req, res) => {
  if (req.body.type === 'on') {
    req.body.type = true
  } else {
    req.body.type = false
  }
  Ride.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatesModel) => {
      res.redirect('/rides')
    }
  )
})

//create
rides.post('/', (req, res) => {
  if (req.body.type === 'on') {
    req.body.type = true
  } else {
    req.body.type = false
  }
  Ride.create(req.body, (error, createdRide) => {
    res.redirect('/')
  })
})

module.exports = rides
