const mongoose = require("mongoose");
const express = require("express");
const res = require("express/lib/response");
const TripModel = require("../models/Trip.model");

const router = express.Router();

router.post("/create-trip", async (req, res) => {
  const {
    bus_id,
    departure,
    destination,
    price,
    dept_time,
    arr_time,
    reserved_seats,
  } = req.body;

  const newTrip = await new TripModel({
    bus_id,
    departure,
    destination,
    price,
    dept_time,
    arr_time,
    reserved_seats,
  });

  newTrip.save();
  res.json({ message: "trip created", data: newTrip });
});

router.get("/get-trips", async(req, res) => {
  const trips = await TripModel.find({}).populate({ path: "bus_id" });
  trips.length !== 0
    ? res.json({ data: trips })
    : res.json({ message: "no trips" });
});

module.exports = router;
