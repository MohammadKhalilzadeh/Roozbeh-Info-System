const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    formcode: {
        type: String,
    },
})

module.exports = mongoose.model('Form', formSchema)