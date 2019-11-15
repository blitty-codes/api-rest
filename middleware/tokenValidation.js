const jwt = require('jsonwebtoken');

const key = process.env.SECRET_TOKEN || 'VyXrp9R6VcbrmlpWfAyqOBG1K03HShKUnxEH4tzzBYv9gzBNAY';

const validate = (req, res, next) => {
  // eslint-disable-next-line consistent-return
  jwt.verify(req.body.token, key, (jwtErr, decodedToken) => {
    if (jwtErr) return res.status(401).send({ message: 'Error', jwtErr });
    req.body.decodedToken = decodedToken;
    next(); // next function
  });
};

const sign = (res, payload) => {
  jwt.sign(payload, key, { expiresIn: 500 }, (jwtErr, token) => {
    if (jwtErr) return res.status(400).send({ message: 'Error', jwtErr });
    return res.status(200).send({ token });
  });
};

module.exports = { sign, validate };
