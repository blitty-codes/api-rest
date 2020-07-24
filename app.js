const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersroutes = require('./routes/usersRoutes');
const booksroutes = require('./routes/booksRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors()); // same as
/*
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});
*/

app.use('/', usersroutes);
app.use('/books', booksroutes);

module.exports = app;
