const mongoose = require("mongoose");
const express = require("express");
const res = require("express/lib/response");
const TripModel = require("../models/Trip.model");

const router = express.Router();

router.post("/create-trip", (req, res) => {
  const {
    bus_id,
    departure,
    destination,
    price,
    dept_time,
    arr_time,
    reserved_seats: [],
  } = req.body;

  const newTrip = new TripModel({
    bus_id,
    departure,
    destination,
    price,
    dept_time,
    arr_time,
    reserved_seats,
  });

  newTrip.save();
  res.json({ message: "user created", data: newTrip });
});

module.exports = router;