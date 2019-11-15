const express = require('express');
const controller = require('../controllers/usersControllers');
const { validate } = require('../middleware/tokenValidation');

const route = express.Router();

route.get('/registers', controller.findAllRegisters);
route.get('/registers', controller.findIdRegister);
route.post('/loginUser', controller.loginUser);
route.post('/addRegister', controller.addRegister);
route.delete('/deleteUser', controller.deleteUser);
route.put('/updateUser', controller.updateUser);


// ROUTE VALIDATE TOKEN
route.post('/tokenValidation', validate, (req, res) => { res.status(200); });

module.exports = route;
