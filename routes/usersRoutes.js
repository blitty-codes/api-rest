const express = require('express')
const controller = require('../controllers/usersControllers')

const route = express.Router()

route.get('/registers', controller.findAllRegisters)
route.get('/registers/:id', controller.findIdRegister)
route.post('/addRegister', controller.addRegister)

module.exports = route