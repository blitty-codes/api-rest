/* eslint-disable linebreak-style */
/* eslint-disable semi */

const express = require('express');
const bodyParser = require('body-parser');// poder coger las peticiones
const usersroutes = require('./routes/usersRoutes');
const booksroutes = require('./routes/booksRoutes')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', usersroutes)
app.use('/books', booksroutes)

module.exports = app
