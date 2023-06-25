// DEPENDENCIES
const express = require('express')
const morgan = require('morgan')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// Middleware should be added above your routes.  Here, we are setting up which view engine will be used and requiring JSX so we can utilize it build our views.

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

// Breads
const breadsController = require('./controllers/bread_controller.js')
app.use('/breads', breadsController)

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})