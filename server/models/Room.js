// id background image enemies
const mongoose = require('mongoose');
const { Schema }   = mongoose;

const roomSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    // Background image
    bgImage: {
        type: String,
        required: true
    },
    // TODO: We may need to change this
    enemies: {
        type: Array,
        required: true
    }


})

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;