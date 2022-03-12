// id userName password email currentHealth maxHealth deck

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
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  maxHealth: {
    type: Number,
    required: true,
    default: 100,
  },
  currentHealth: {
    type: Number,
    required: true,
    default: 100,
  },

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
