const express = require('express'),
    bodyParser = require('body-parser'),// poder coger las peticiones
    routes = require('./routes/usersRoutes')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', routes)

module.exports = app;