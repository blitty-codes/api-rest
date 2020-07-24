const express = require('express');
const controllers = require('../controllers/booksControllers');

const route = express.Router();

route.post('/', controllers.addBook);
route.get('/getBooks', controllers.getAllBooks);
route.post('/ISBN', controllers.getBookbyISBN);
route.post('/author', controllers.getBookbyauthor);
route.post('/title', controllers.getBookbytitle);
route.post('/price', controllers.getBookbyprice);
route.post('/publisher', controllers.getBookbypublisher);
route.post('/description', controllers.getBookbydescription);
route.post('/publicationDate', controllers.getBookbypublicationDate);
route.delete('/deleteBook', controllers.deleteBook);
route.put('/updateBook', controllers.updateBook);

module.exports = route;
