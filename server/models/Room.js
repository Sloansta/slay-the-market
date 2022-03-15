// Room Model
const mongoose = require('mongoose');
const { Schema }   = mongoose;

const roomSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
   
    bgImage: {
        type: String,
        required: true
    },
   
    enemies: {
        type: Array,
        required: true
    }


})

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;