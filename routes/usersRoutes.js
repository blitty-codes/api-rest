const express = require('express')
const controller = require('../controllers/usersControllers')

const route = express.Router()

route.get('/registers', controller.findAllRegisters)
route.get('/registers', controller.findIdRegister)///:id
route.get('/loginUser', controller.loginUser)///:mail/:password
route.post('/addRegister', controller.addRegister)
route.delete('/deleteUser', controller.deleteUser)///:mail/:password
route.put('/updateUser', controller.updateUser)///:nameU/:mail/:password

module.exports = route