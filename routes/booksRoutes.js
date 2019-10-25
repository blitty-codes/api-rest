/* eslint-disable linebreak-style */
/* eslint-disable semi */

const express = require('express')
const controllers = require('../controllers/booksControllers')

const route = express.Router()

route.post('/', controllers.addBook)
route.get('/', controllers.getAllBooks)
route.get('/ISBN', controllers.getBookbyISBN)
route.get('/author', controllers.getBookbyauthor)
route.get('/title', controllers.getBookbytitle)

module.exports = route
