const mongoose = require("mongoose");
const { Schema } = mongoose;

const stockSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  quote: {
    type: Number,
    required: true,
  },
  candleTrend: {
    type: Number,
    required: true,
  },
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
