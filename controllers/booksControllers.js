/* eslint-disable consistent-return */

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
    if (err) return res.status(500).send({ message: 'No book saved', err });
    return res.status(200).send(newBook);
  });
};

// GET all books in the DB
const getAllBooks = (req, res) => {
  book.find((err, books) => {
    if (err) return res.status(500).send(`ERROR: ${err}`);
    return res.status(200).send(books);
  });
};

// GET a book by ISBN
const getBookbyISBN = (req, res) => {
  const userISBN = req.body.ISBN;

  // find the book in the DB
  book.findOne({ ISBN: userISBN }, (err, search) => {
    if (err) return res.status(500).send({ message: 'No ISBN searched', err });
    if (search === null) return res.status(404).send({ message: 'Wrong ISBN' });

    return res.status(200).send({ search });
  });
};

// GET books by title
const getBookbytitle = (req, res) => {
  const userTitle = req.body.title;

  // find books by title
  book.findOne({ title: userTitle }, (err, search) => {
    if (err) return res.status(500).send({ message: 'No title searched', err });
    if (search.length === 0) return res.status(404).send({ message: 'Wrong title' });

    return res.status(200).send({ search });
  });
};

// GET books by author
const getBookbyauthor = (req, res) => {
  const userAuthor = req.body.author;

  // find books by author
  book.find({ author: userAuthor }, (err, search) => {
    if (err) return res.status(500).send({ message: 'No author searched', err });
    if (search.length === 0) return res.status(404).send({ message: 'Wrong author' });

    return res.status(200).send({ search });
  });
};

const getBookbyprice = (req, res) => {
  const userPrice = req.body.price;

  book.find({ price: userPrice }, (err, search) => {
    if (err) return res.status(500).send({ message: 'No book found', err });
    if (search.length === 0) return res.status(404).send({ message: 'No books with that price' });

    return res.status(200).send({ search });
  });
};

const getBookbypublisher = (req, res) => {
  const userPublisher = req.body.publisher;

  book.find({ publisher: userPublisher }, (err, search) => {
    if (err) return res.status(500).send({ message: 'No book found', err });
    if (search.length === 0) return res.status(404).send({ message: 'No books with that publisher' });

    return res.status(200).send({ search });
  });
};

const getBookbypublicationDate = (req, res) => {
  const userpublicationDate = req.body.publicationDate;

  book.find({ publicationDate: userpublicationDate }, (err, search) => {
    if (err) return res.status(500).send({ message: 'No book found', err });
    if (search.length === 0) return res.status(404).send({ message: 'No books with that publication date' });

    return res.status(200).send({ search });
  });
};

const getBookbydescription = (req, res) => {
  const userDescription = req.body.description;
  const found = [];

  book.find((err, search) => {
    if (err) return res.status(500).send({ message: 'No book found', err });
    if (search.length === 0) return res.status(404).send({ message: 'No books with that publication date' });
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < search.length; i++) {
      if (search[i].description.includes(userDescription) === true) {
        found.push(search[i]);
      }
    }
    return res.status(200).send(found);
  });
};

const deleteBook = (req, res) => {
  const userISBN = req.body.ISBN;

  // find the user in the DB
  book.find({ ISBN: userISBN }, (err, search) => {
    // Handle errors
    if (err) return res.status(500).send({ message: 'No ISBN searched', err });
    if (search[0].length === 0) return res.status(404).send({ message: 'No book' });
    book.deleteOne({ ISBN: userISBN }).then(res.status(200).send({ message: 'The book has been deleted' }));
  });
};

const updateBook = (req, res) => {
  const userISBN = req.body.ISBN;
  const userDescription = req.body.description;
  // find the user in the DB

  book.find({ ISBN: userISBN }, (err, search) => {
    // Handle errors
    if (err) return res.status(500).send({ message: 'No ISBN searched', err });
    if (search[0].length === 0) return res.status(404).send({ message: 'No book' });
    book.updateOne({ description: userDescription }).then(res.status(200).send({ message: 'The book has been updated' }));
  });
};

module.exports = {
  addBook,
  getBookbyISBN,
  getBookbytitle,
  getBookbyauthor,
  getAllBooks,
  getBookbyprice,
  getBookbypublisher,
  getBookbypublicationDate,
  getBookbydescription,
  deleteBook,
  updateBook,
};
