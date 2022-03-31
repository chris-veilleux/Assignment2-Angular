const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema
let Store = new Schema(
  {
    name: {
      type: String
    },
    url: {
      type: String
    },
    location: {
      type: String
    },
  },
  {
    collection: 'onlinestores',
  },
)

module.exports = mongoose.model('Store', Store)
