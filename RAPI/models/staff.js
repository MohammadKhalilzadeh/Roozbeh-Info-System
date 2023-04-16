const mongoose = require('mongoose')

const staffSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    nationalno: {
        type: Number,
    },
    birthdate: {
        type: Date,
        default: Date.now()
    },
    phone: {
        type: Number,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    address: {
        type: String,
    },
    resolver: {
        type: Boolean,
    },
    counsultant: {
        type: Boolean,
    },
    health: {
        type: Boolean,
    },
    education: {
        type: Boolean,
    },
})

module.exports = mongoose.model('Staff', staffSchema)