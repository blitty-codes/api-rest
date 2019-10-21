module.exports = (app) => {

    var register = require('../models/register')
    
    //GET - Return all registers in the DB
    findAllRegisters = (req, res) => {
        register.find((err, registers) => {
            if (err) console.log(`ERROR: ${err}`)
            else { 
                res.status(200).send(registers)
                console.log('GET /registers')
            }
        })
    }

    // Devolver un registro mediante una Id
    findIdRegister = (req, res) => {
        register.findById(req.params.id, (err, register) => {
            if (err) console.log(`ERROR: ${err}`)
            if (!register) res.status(404).send({ message: 'El producto no existe'})

            res.status(200).send({ register })
        })
    }

    // Mediante un POST se envian los datos
    addRegister = (req, res) => {
        console.log('POST')
        console.log(req.body)

        var NewRegister = new register({
            name:       req.body.name,
            lastName:   req.body.lastName,
            mail:       req.body.mail,// obligatorio 
            password:   req.body.password,// obligatorio 
            phone:      req.body.phone,// 9 digitos
            date:       req.body.date
        })

        NewRegister.save((err) => {
            if(err) console.log(`ERROR: ${err}`)
            else console.log('Created new register')
        })
        
        res.send(NewRegister)
    }

    app.get('/registers', findAllRegisters)
    app.get('/registers/:id', findIdRegister);
    app.post('/addRegister', addRegister)
}