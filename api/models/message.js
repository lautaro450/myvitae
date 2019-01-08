var mongoose = require('mongoose');
// create schema
let Schema = mongoose.Schema;
let messageSchema = new mongoose.Schema({
    subject: String,
    name: String,
    email: String,
    username: {type: Schema.Types.String, required: true },
    message: { type: String, required: true }
})

// create model
let Message = mongoose.model('message', messageSchema);

//make this available for our node app
module.exports = Message;  