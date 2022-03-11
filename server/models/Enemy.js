// currentHealth, maxHealth, intents
const mongoose = require('mongoose');
const { Schema }   = mongoose;

const enemySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true

    },
    currentHealth: {
        type: Number,
        required: true
    },
    maxHealth: {
        type: Number,
        required: true
    },
    // TODO: 
    // I am not positive what this will look like
    // so making it an array for now
    intents: {
        type: Array
    },

    isBoss: {
        type: Boolean,
        required: true
    }

});

const Enemy = mongoose.model('Enemy', enemySchema);

module.exports = Enemy;