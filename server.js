const mongoose = require('mongoose')
const app = require('./app')

const mongoDB = process.env.MONGODB || 'mongodb://localhost:27017/Hackaton_Mongo'
const port = process.env.PORT || 3000;

mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if(err) console.log(`ERROR connecting to Database ${err}`)
    else app.listen(port, console.log(`Conectado -> http://localhost:${port}`))
})