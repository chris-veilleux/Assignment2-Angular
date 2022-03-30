// const express = require('express')
// const app = express()
// const promotionRoute = express.Router()

// // Promotion model
// let Promotion = require('../model/Promotion')

// // Add Promotion
// promotionRoute.route('/add-promotion').post((req, res, next) => {
//   Promotion.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

// // Get all Promotions
// promotionRoute.route('/').get((req, res) => {
//   Promotion.find((error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

// // Get single Promotion
// promotionRoute.route('/read-promotion/:id').get((req, res) => {
//   Promotion.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

// // Update Promotion
// promotionRoute.route('/update-promotion/:id').put((req, res, next) => {
//   Promotion.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     (error, data) => {
//       if (error) {
//         return next(error)
//         console.log(error)
//       } else {
//         res.json(data)
//         console.log('Promotion successfully updated!')
//       }
//     },
//   )
// })

// // Delete Promotion
// promotionRoute.route('/delete-promotion/:id').delete((req, res, next) => {
//   Promotion.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.status(200).json({
//         msg: data,
//       })
//     }
//   })
// })

// module.exports = promotionRoute
