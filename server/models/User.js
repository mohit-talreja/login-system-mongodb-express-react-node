const mongoose = require('mongoose')

const validator = require('validator')

require('./db')

module.exports = new mongoose.model('User', new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: value => {
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email!')
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate: value => {
            if(value.includes('password')){
                throw new Error('Password Can Not Contain "password"!')
            }
        }
    }
}))