var mongoose = require('mongoose');
// create schema
let Schema = mongoose.Schema;
let userSchema = new mongoose.Schema({
    firstName: {type: String, default: null},
    lastName: {type: String, default: null},
    company: {type: String, default: null},
    email: {type: String},
    city: {type: String, default: null},
    country: {type: String, default: null},
    zipCode: {type: String, default: null},
    aboutMe: {type: String, default: null},
    username: {type: Schema.Types.String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
})

userSchema.methods.getName = function() {
    this.name
}
// create model
let User = mongoose.model('user', userSchema);
userSchema.statics.findByUsername = (username, callback) => {
    const query = this.findOne()
    User.findOne({username: username}, (err, user) => {
        console.log(callback(null,user))
    })
    
}

//make this available for our node app
module.exports = User;  