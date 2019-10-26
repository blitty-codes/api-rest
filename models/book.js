const mongoose = require('mongoose');

const { Schema } = mongoose;

const book = new Schema({
  title: { type: String, required: [true, 'Please send me the title'] },
  author: { type: String, required: [true, 'What\'s the author name?'] },
  ISBN: { type: String, unique: true, required: [true, 'We need this information'] },
  price: { type: Number, required: [true, 'What\'s the price?'] },
  publisher: { type: String },
  description: { type: String },
  publicationDate: { type: String, required: [true, 'We need the publication day'] },
});

module.exports = mongoose.model('books', book);
