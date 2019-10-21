var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var registerSchema = new Schema({
    name:       { type: String }, 
    lastName:   { type: String }, 
    mail:       { type: String },// obligatorio 
    password:   { type: String },// obligatorio 
    phone:      { type: Number },// 9 digitos
    date:       { type: Date }
})

module.exports = mongoose.model('UsersData', registerSchema)