const user = require('../models/register')

//GET all users
findAllRegisters = (req, res) => {
    user.find((err, registers) => {
        if (err) res.status(404).send(`ERROR: ${err}`)
        else res.status(200).send(registers)
    })
}

// GET a user by ID
findIdRegister = (req, res) => {
    user.findById(req.params.id, (err, userId) => {
        if (err) res.status(404).send(`ERROR: ${err}`)
        if (!userId) res.status(404).send({ message: 'No user found' })

        res.status(200).send({ userId })
    })
}

// POST send all data
addRegister = (req, res) => {

    const NewRegister = new user({
        name: req.body.name,
        lastName: req.body.lastName,
        mail: req.body.mail,
        password: req.body.password,
        phone: req.body.phone,
    })

    NewRegister.save((err) => {
        if (err) res.status(400).send({ message: 'No user saved', err })
    })

    res.send(NewRegister)
}

module.exports = {
    findAllRegisters,
    findIdRegister,
    addRegister
}
