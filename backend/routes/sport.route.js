const express = require('express')
const app = express()
const sportRoute = express.Router()

// sport model
let Sport = require('../model/Sport')

// Add sport
sportRoute.route('/add-sport').post((req, res, next) => {
    Sport.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get all Sport
sportRoute.route('/').get((req, res) => {
 Sport.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Sport
sportRoute.route('/read-sport/:id').get((req, res) => {
    Sport.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Sport
sportRoute.route('/update-sport/:id').put((req, res, next) => {
    Sport.findByIdAndUpdate(
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
        console.log('Sport successfully updated!')
      }
    },
  )
})

// Delete Sport
sportRoute.route('/delete-sport/:id').delete((req, res, next) => {
    Sport.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = sportRoute
