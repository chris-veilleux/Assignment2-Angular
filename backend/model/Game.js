const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema
let Game = new Schema(
  {
    name: {
      type: String,
    },
    genre: {
      type: String,
    },
  },
  {
    collection: 'games',
  },
)

module.exports = mongoose.model('Game', Game)
