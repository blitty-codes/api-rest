var http = require('http'),
    express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),// poder coger las peticiones
    methodOverride = require('method-override'),
    app = express(),
    server = http.createServer(app)


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

routes = require('./routes/registers') (app)

mongoose.connect('mongodb://localhost:27017/Hackaton_Mongo', (err, res) => {
    if (err) console.log(`ERROR: connecting to Database ${err}`)
    else console.log('Connected to Database')
})

server.listen(3000, () => {
    console.log('Node server running on http://localhost:3000')
})