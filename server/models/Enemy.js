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
    attack: {
        type: Number,
        required: true
    },
    block: {
        type: Number,
        required: true
    }

});

const Enemy = mongoose.model('Enemy', enemySchema);

module.exports = Enemy;