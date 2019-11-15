const express = require('express');
const controllers = require('../controllers/booksControllers');

const route = express.Router();

route.post('/', controllers.addBook);
route.get('/getBooks', controllers.getAllBooks);
route.get('/ISBN', controllers.getBookbyISBN);
route.get('/author', controllers.getBookbyauthor);
route.get('/title', controllers.getBookbytitle);
route.get('/price', controllers.getBookbyprice);
route.get('/publisher', controllers.getBookbypublisher);
route.get('/description', controllers.getBookbydescription);
route.get('/publicationDate', controllers.getBookbypublicationDate);
route.delete('/deleteBook', controllers.deleteBook);
route.put('/updateBook', controllers.updateBook);

module.exports = route;
