/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

const book = require('../models/book');

// POST a book
const addBook = (req, res) => {
  // eslint-disable-next-line new-cap
  const newBook = new book({
    title: req.body.title,
    author: req.body.author,
    ISBN: req.body.ISBN,
    description: req.body.description,
    price: req.body.price,
    publisher: req.body.publisher,
    publicationDate: req.body.publicationDate,
  });

  newBook.save((err) => {
    if (err) return res.status(400).send({ message: 'No book saved' });
    res.send(newBook);
  });
};

// GET all books in the DB
const getAllBooks = (req, res) => {
  book.find((err, books) => {
    if (err) return res.status(404).send(`ERROR: ${err}`);
    res.status(200).send(books);
  });
};

// GET a book by ISBN
const getBookbyISBN = (req, res) => {
  const userISBN = req.body.ISBN;

  // find the book in the DB
  book.findOne({ ISBN: userISBN }, (err, search) => {
    if (err) return res.status(400).send({ message: 'No ISBN searched', err });
    if (search.ISBN !== userISBN) return res.status(404).send({ message: 'Wrong ISBN' });

    res.status(200).send({ search });
  });
};

// GET books by title
const getBookbytitle = (req, res) => {
  const userTitle = req.body.title;

  // find books by title
  book.find({ title: userTitle }, (err, search) => {
    if (err) return res.status(400).send({ message: 'No title searched', err });
    if (search[0].title !== userTitle) return res.status(404).send({ message: 'Wrong title' });

    res.status(200).send({ search });
  });
};

// GET books by author
const getBookbyauthor = (req, res) => {
  const userAuthor = req.body.author;

  // find books by author
  book.find({ author: userAuthor }, (err, search) => {
    if (err) return res.status(400).send({ message: 'No author searched', err });
    if (search[0].author !== userAuthor) return res.status(404).send({ message: 'Wrong author' });

    res.status(200).send({ search });
  });
};

module.exports = {
  addBook,
  getBookbyISBN,
  getBookbytitle,
  getBookbyauthor,
  getAllBooks,
};
