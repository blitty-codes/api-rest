const jwt = require('jsonwebtoken');

const sign = (res, payload, key) => {
  jwt.sign(payload, key, { expiresIn: 500 }, (jwtErr, token) => {
    if (jwtErr) return res.status(400).send({ message: 'Error', jwtErr });
    return res.status(200).send({ message: 'Access', token });
  });
};

const validate = (token, res, payload, key) => {
  jwt.verify(token, key, (jwtErr, decodedToken) => {
    // create a new token if there is no one
    if (jwtErr.name === 'TokenExpiredError' ||token === undefined) return sign(res, payload, key);
    if (jwtErr) return res.status(404).send({ message: 'Error', jwtErr });
    return res.status(200).send({ message: 'Done', decodedToken });
  });
};

module.exports = { sign, validate };
