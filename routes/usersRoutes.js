/* eslint-disable linebreak-style */
/* eslint-disable semi */

const express = require('express')
const controller = require('../controllers/usersControllers')

const route = express.Router()

route.get('/registers', controller.findAllRegisters)
route.get('/registers', controller.findIdRegister)
route.get('/loginUser', controller.loginUser)
route.post('/addRegister', controller.addRegister)
route.delete('/deleteUser', controller.deleteUser)
route.put('/updateUser', controller.updateUser)

module.exports = route
