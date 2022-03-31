const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Connecting mongoDB
mongoose
  .connect('mongodb+srv://admin:javascript2@cluster0.xpsmq.mongodb.net/Students?retryWrites=true&w=majority')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })


// Set up express js port
const studentRoute = require('./routes/student.route')
const gameRoute = require('./routes/game.route')
const storeRoute = require('./routes/store.route')
const sportRoute = require('./routes/sport.route')
const creditRoute = require('./routes/credit.route')

const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())

// Setting up static directory
app.use(
  express.static(
    path.join(__dirname, 'dist/angular-material-mean-stack'),
  ),
)

// RESTful API roots
app.use('/api/students', studentRoute)
app.use('/api/games', gameRoute)
app.use('/api/stores', storeRoute)
app.use('/api/sports', sportRoute)
app.use('/api/credit', creditRoute)

// PORT
const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint')
})

app.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'dist/angular-material-mean-stack/index.html'),
  )
})

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})
