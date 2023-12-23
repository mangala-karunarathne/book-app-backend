const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"]
    },
    apc_num: {
        type: String,
        required: [true, "Please add a APC number"]
    },
    isbn_num: {
        type: String,
        required: [true, "Please add a ISBN number"]
    }
})