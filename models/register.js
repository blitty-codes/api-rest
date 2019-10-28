const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const registerSchema = new Schema({
  name: { type: String, required: [true, 'Name required'] },
  lastName: { type: String, required: [true, 'Last name required'] },
  mail: { type: String, unique: true, required: [true, 'Mail required'] },
  password: { type: String, required: [true, 'Password required'] },
  phone: { type: String, minlength: 9, maxlength: 9 },
  date: { type: Date, default: Date.now() },
});

registerSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10, (err1, hash) => {
    if (err1) console.log(err1);
    this.password = hash;
    next();
  });
});

module.exports = mongoose.model('Users', registerSchema);
