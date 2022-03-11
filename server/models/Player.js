// id username password email currentHealth maxHealth deck

const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const playerSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  maxHealth: {
    type: Number,
    required: true,
  },
  currentHealth: {
    type: Number,
    required: true,
  },
  // Might use an array of card names??
  // deck: {
  //   type: Array,
  // },
  // We might need to do an array of subdocuments

  deck: [
    {
      type: Schema.Types.ObjectId,
      ref: "Card",
    },
  ],
});

// set up pre-save middleware to create password
playerSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
playerSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
