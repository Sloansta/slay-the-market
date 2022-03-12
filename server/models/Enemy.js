// currentHealth, maxHealth, intents
const mongoose = require('mongoose');
const { Schema }   = mongoose;

const enemySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    isBoss: {
        type: Boolean,
        required: true,
    },
    currentHealth: {
        type: Number,
        required: true
    },
    maxHealth: {
        type: Number,
        required: true
    },
    intents: {
        type: Array
    },

});

const Enemy = mongoose.model('Enemy', enemySchema);

module.exports = Enemy;