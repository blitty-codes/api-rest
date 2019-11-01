const jwt = require('jsonwebtoken');

const sign = (res, payload, key) => {
  jwt.sign(payload, key, { expiresIn: 500 }, (jwtErr, token) => {
    if (jwtErr) return res.status(400).send({ message: 'Error', jwtErr });
    return res.status(200).send({ message: 'Access', token });
  });
};

const validate = (req, res, next) => {
  const key = process.env.SECRET_TOKEN || 'VyXrp9R6VcbrmlpWfAyqOBG1K03HShKUnxEH4tzzBYv9gzBNAY';

  jwt.verify(req.body.token, key, (jwtErr, decodedToken) => {
    if (jwtErr) return res.status(401).send({ message: 'Error', jwtErr });
    req.body.decodedToken = decodedToken;
    next();
  });
};

module.exports = { sign, validate };
