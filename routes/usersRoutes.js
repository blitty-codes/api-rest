const express = require('express')
const controller = require('../controllers/usersControllers')

const route = express.Router()

route.get('/registers', controller.findAllRegisters)
route.get('/registers/:id', controller.findIdRegister)
route.get('/loginUser/:mail/:password', controller.loginUser)
route.post('/addRegister', controller.addRegister)
route.delete('/deleteUser/:mail/:password', controller.deleteUser)
route.put('/updateUser/:nameU/:mail/:password', controller.updateUser)

module.exports = route