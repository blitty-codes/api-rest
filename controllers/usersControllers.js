/* eslint-disable consistent-return */
const bcrypt = require('bcrypt');

const User = require('../models/register');
const { sign } = require('../middleware/tokenValidation');

// GET all users
const findAllRegisters = (req, res) => {
  User.find((err, registers) => {
    if (err) return res.status(500).send(`ERROR: ${err}`);
    return res.status(200).send(registers);
  });
};

// GET user by ID
const findIdRegister = (req, res) => {
  User.findById(req.body.id, (err, userId) => {
    if (err) return res.status(500).send(`ERROR: ${err}`);
    if (!userId) return res.status(404).send({ message: 'No user found' });

    return res.status(200).send({ userId });
  });
};

// POST send all data
const addRegister = (req, res) => {
  const newRegister = new User({
    name: req.body.name,
    lastName: req.body.lastName,
    mail: req.body.mail,
    password: req.body.password,
    phone: req.body.phone,
  });

  newRegister.save((err) => {
    if (err) return res.status(500).send({ message: 'No user saved', err });
    return sign(res, newRegister);
  });
};

// Delete user by email
const deleteUser = (req, res) => {
  const userPass = req.body.password;
  const userMail = req.body.mail;

  // verify if is the same user
  if (userMail === req.body.decodedToken.mail) {
    bcrypt.compare(userPass, req.body.decodedToken.password, (err) => {
      if (err) return res.status(401).send({ message: 'Sorry but your credentials are wrong', err });

      // find the user in the DB
      User.find({ mail: userMail, password: userPass }, (errDB) => {
        // Handle errors
        if (errDB) return res.status(500).send({ message: 'No mail searched', errDB });
        return User.deleteOne({ mail: userMail }).then(res.status(200).send({ message: `The user ${req.body.decodedToken.name} has been deleted` }));
      });
    });
  }
};

// Update the users name
const updateUser = (req, res) => {
  const userName = req.body.name;
  const userMail = req.body.mail;
  const userPass = req.body.password;

  User.find({ mail: userMail }, (err, user) => {
    // Handle errors
    if (err) return res.status(500).send({ message: 'No mail searched', err });
    if (user[0].name === userName && user[0].password !== userPass) return res.status(404).send({ message: 'Wrong' });
    return User.updateOne({ name: userName }).then(res.status(200).send({ message: 'The user has been updated' }));
  });
};

// The user can login
const loginUser = (req, res) => {
  const userMail = req.body.mail;
  const userPass = req.body.password;

  User.find({ mail: userMail }, (err, login) => {
    // Handle errors
    if (login.length === 0) return res.status(404).send({ message: 'No users in DB', err });
    if (err) return res.status(500).send({ message: 'No user searched', err });

    // eslint-disable-next-line prefer-arrow-callback
    bcrypt.compare(userPass, login[0].password, function (err1, ok) {
      if (err1) return res.status(500).send({ message: 'Password was incorrect', err1 });
      // Equal
      if (ok) {
        const payload = {
          name: login[0].name,
          mail: login[0].mail,
          password: login[0].password,
        };
        return sign(res, payload);
      }
    });
  });
};

module.exports = {
  findAllRegisters,
  findIdRegister,
  addRegister,
  deleteUser,
  updateUser,
  loginUser,
};
