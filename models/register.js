const mongoose = require('mongoose');

const { Schema } = mongoose;

const registerSchema = new Schema({
  name: { type: String, required: [true, 'Name required'] },
  lastName: { type: String, required: [true, 'Last name required'] },
  mail: { type: String, unique: true, required: [true, 'Mail required'] },
  password: { type: String, required: [true, 'Password required'] },
  phone: { type: String, minlength: 9, maxlength: 9 },
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Users', registerSchema);
