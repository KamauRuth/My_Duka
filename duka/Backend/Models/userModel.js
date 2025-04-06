const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please tell us your username!']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email!']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password!']
    } 

}, {
    timestamps: true
});

const userModel = mongoose.model('Users', userShema);

module.exports = userModel;