const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema
let Credit = new Schema(
  {
    name: {
      type: String,
    },
    number: {
      type: Number,
    },
    balance: {
      type: Number,
    },
  },
  {
    collection: 'credit',
  },
)

module.exports = mongoose.model('Credit', Credit)