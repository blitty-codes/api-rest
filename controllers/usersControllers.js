const User = require('../models/register')

//GET all users
findAllRegisters = (req, res) => {
    User.find((err, registers) => {
        if (err) res.status(404).send(`ERROR: ${err}`)
        else res.status(200).send(registers)
    })
}

// GET user by ID
findIdRegister = (req, res) => {
    User.findById(req.params.id, (err, userId) => {
        if (err) res.status(404).send(`ERROR: ${err}`)
        if (!userId) res.status(404).send({ message: 'No user found' })

        res.status(200).send({ userId })
    })
}

// POST send all data
addRegister = (req, res) => {

    const newRegister = new User({
        name: req.body.name,
        lastName: req.body.lastName,
        mail: req.body.mail,
        password: req.body.password,
        phone: req.body.phone,
    })

    newRegister.save((err) => {
        if (err) return res.status(400).send({ message: 'No user saved', err })
        res.send(newRegister)
    })
}

module.exports = {
    findAllRegisters,
    findIdRegister,
    addRegister
}
