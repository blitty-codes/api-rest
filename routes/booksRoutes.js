const express = require('express');
const controllers = require('../controllers/booksControllers');

const route = express.Router();

route.post('/', controllers.addBook);
route.get('/', controllers.getAllBooks);
route.get('/ISBN', controllers.getBookbyISBN);
route.get('/author', controllers.getBookbyauthor);
route.get('/title', controllers.getBookbytitle);
route.get('/price', controllers.getBookbyprice);
route.get('/publisher', controllers.getBookbypublisher);
route.get('/description', controllers.getBookbydescription);
route.get('/publicationDate', controllers.getBookbypublicationDate);

module.exports = route;