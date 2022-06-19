const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.ObjectId, ref: "user" },
    trip_id: { type: mongoose.ObjectId, ref: "trip" },
    numberOfSeats: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("book", BookSchema);
