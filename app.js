const express = require('express'),
    bodyParser = require('body-parser'),// poder coger las peticiones
    usersroutes = require('./routes/usersRoutes'),
    booksroutes = require('./routes/booksRoutes')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', usersroutes)
app.use('/books', booksroutes)

module.exports = app;