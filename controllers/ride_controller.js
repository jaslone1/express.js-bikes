const express = require('express')
const rides = express.Router()
const Ride = require('../models/rides.js')


//Index
rides.get('/:letter', (req, res) => {
  Ride.find(req.params.letter, (error, foundRides)=> {
    res.send({
    // })
    // res.render('index.ejs', {
      rides: foundRides
    })
  })
})

//home
rides.get('/home', (req, res) => {
    res.render('home.ejs')
})

//new
rides.get('/new', (req, res) =>{
  console.log('heres new');
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
  Ride.create(req.body, (error, createdRide) => {
    res.redirect('/')
  })
})

module.exports = rides
