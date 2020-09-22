const express = require('express')
const rides = express.Router()
const Ride = require('../models/rides.js')

const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/rides/home')
  }
}

//home
rides.get('/home', (req, res) => {
  Ride.find({}, (error, allRides)=>{
    res.render('home.ejs', {
    rides: allRides,
    currentUser: req.session.currentUser
  })
  })
})

//new
rides.get('/new', isAuthenticated, (req, res) =>{
  res.render(
    'new.ejs', {
      currentUser: req.session.currentUser}
    )
})

//edit
rides.get('/:id/edit', isAuthenticated, (req,res) => {
  Ride.findById(req.params.id, (error, foundRide) => {
    res.render('edit.ejs', {
      ride: foundRide,
      currentUser: req.session.currentUser
    })
  })
})

//delete
rides.delete('/:id', isAuthenticated, (req, res) => {
  Ride.findByIdAndRemove(req.params.id, (error, deletedRide) => {
    res.redirect('/rides/home')
  })
})



//Show
rides.get('/:id', (req, res) => {
  if (req.session.currentUser) {
    Ride.findById(req.params.id, (error, foundRide) => {
      res.render('show.ejs', {
        ride: foundRide,
        currentUser: req.session.currentUser
      })
    })
  } else {
    res.redirect('/sessions/new')
  }
})

//update
rides.put('/:id', isAuthenticated, (req, res) => {
  Ride.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatesModel) => {
      res.redirect('/rides/home')
    }
  )
})

//create
rides.post('/', isAuthenticated, (req, res) => {
  Ride.create(req.body, (error, createdRide) => {
    res.redirect('/rides/home')
  })
})

//Index
rides.get('/', (req, res) => {
  Ride.find({}, (error, allRides)=> {
    res.render('index.ejs', {
      rides: allRides,
      currentUser: req.session.currentUser
    })
  })
})

module.exports = rides
