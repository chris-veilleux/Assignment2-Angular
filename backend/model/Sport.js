const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema
let Sport = new Schema(
  {
    name: {
      type: String,
    },
    players: {
      type: String,
    },
  },
  {
    collection: 'sports',
  },
)

module.exports = mongoose.model('Sport', Sport)