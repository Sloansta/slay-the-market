// Dungeon Model, so we can send everything to the player
// when they login, so they can play offline after
const mongoose = require("mongoose");

const { Schema } = mongoose;


const dungeonSchema = new Schema({
  dungeonId: {
    type: Number,
    required: true,
    
  },
  rooms: [
    {
      type: Schema.Types.ObjectId,
      ref: "Room",
    }, 
  ],
  rewards: [
    {
      type: Schema.Types.ObjectId,
      ref: "Card",
    }, 
    
  ],
  finalBoss: [
      {
          type:Schema.Types.ObjectId,
          ref: "Enemy"
      }
  ]
 
});



const Dungeon = mongoose.model("Dungeon", dungeonSchema);

module.exports = Dungeon;
