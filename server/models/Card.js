// Card Model
const mongoose = require('mongoose');
const { Schema }   = mongoose;

const cardSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    id: {
        type: Number
    },
    class: {
        type: String,
        require: true,
        trim: true
    },
    value: {
        type: Number,
        require: true
    },
    upgrade: {
        type: Number,
        require: true
    }


})

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;