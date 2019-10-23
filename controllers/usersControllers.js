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
    User.findById(req.body.id, (err, userId) => {
        if (err) return res.status(404).send(`ERROR: ${err}`)
        if (!userId) return res.status(404).send({ message: 'No user found' })

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

// Delete user by email
deleteUser = (req, res) => {

    const userPass = req.body.password
    const userMail = req.body.mail

    // find the user in the DB
    User.find({ mail: userMail}, (err, user) => {
        // Handle errors
        if (err) return res.status(400).send({ message: 'No mail searched', err })
        if (user[0].mail != userMail && user[0].password != userPass) return res.status(404).send({ message: 'Wrong' })
        User.deleteOne({ mail: userMail }).then(res.status(200).send({ message: 'The user has been deleted' }))
    })

}

updateUser = (req, res) => {

    const userName = req.body.name
    const userMail = req.body.mail
    const userPass = req.body.password

    User.find({ mail: userMail }, (err, user) => {
        // Handle errors
        if (err) return res.status(400).send({ message: 'No mail searched', err })
        if (user[0].name === userName && user[0].password != userPass) return res.status(404).send({ message: 'Wrong' })
        User.updateOne({ name: userName }).then(res.status(200).send({ message: 'The user has been updated' }))
    })

}

const loginUser = (req, res) => {

    const userMail = req.body.mail
    const userPass = req.body.password

    User.find({ mail: userMail, password: userPass}, (err, user) => {
        // Handle errors
        if (err) return res.status(400).send({ message: 'No user searched', err })
        res.status(200).send({ message: `Welcome!! ${user}` })
    })

}

module.exports = {
    findAllRegisters,
    findIdRegister,
    addRegister,
    deleteUser,
    updateUser,
    loginUser
}
