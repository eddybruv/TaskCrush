const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    number: Number,
    name: String,
    seats: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("bus", UserSchema);
