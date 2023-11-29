const mongoose = require('mongoose');
const { isEmail } = require('validator');
const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email: {
        type: String,
        required: [true, 'email required'],
        unique: true,
        lowercase: true,
        validate: [isEmail , 'not valid']
    },
    password: {
        type: String,
        minlength: [6, 'min length 6']
    },
    role: {
        required: true,
        type: String
    }
    
});

const userModel = mongoose.model('User',userSchema);

module.exports = userModel;