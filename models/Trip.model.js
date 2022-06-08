const mongoose = require("mongoose");

const TripSchema = mongoose.Schema(
  {
    bus_id: { type: mongoose.ObjectId, ref: "bus" },
    departure: String,
    destination: String,
    price: Number,
    dept_time: String,
    arr_time: String,
    reserved_seats: Array,
    date: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("trip", TripSchema);
