const express = require('express')
const app = express()
const creditRoute = express.Router()

// credit model
let Credit = require('../model/Credit')

// Add credit
creditRoute.route('/add-credit').post((req, res, next) => {
    Credit.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get all credit
creditRoute.route('/').get((req, res) => {
    Credit.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single credit
creditRoute.route('/read-credit/:id').get((req, res) => {
    Credit.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update credit
creditRoute.route('/update-credit/:id').put((req, res, next) => {
    Credit.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('Credit Card successfully updated!')
      }
    },
  )
})

// Delete credit
creditRoute.route('/delete-credit/:id').delete((req, res, next) => {
    Credit.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = creditRoute
