const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema
let Promotion = new Schema(
  {
    name: {
      type: String,
    },
    percent_discount: {
      type: Number,
    },
  },
  {
    collection: 'promotions',
  },
)

module.exports = mongoose.model('Promotion', Promotion)
