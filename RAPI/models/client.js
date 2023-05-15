const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    nationalno: {
        type: String,
    },
})

module.exports = mongoose.model('Client', clientSchema)