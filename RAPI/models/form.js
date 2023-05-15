const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    formcode: {
        type: String,
    },
    nationalno: {
        type: String,
    },
    content: {
        type: mongoose.Schema.Types.Mixed,
    },
})

module.exports = mongoose.model('Form', formSchema)