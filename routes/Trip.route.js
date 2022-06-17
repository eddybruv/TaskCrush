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
    date,
  } = req.body;
  console.log(date);
  const newTrip = await new TripModel({
    bus_id,
    departure,
    destination,
    price,
    dept_time,
    arr_time,
    reserved_seats,
    date,
  });

  newTrip.save();
  res.json({ message: "trip created", data: newTrip });
});

router.get("/get-trips", async (req, res) => {
  const trips = await TripModel.find({}).populate({ path: "bus_id" });
  trips.length !== 0
    ? res.json({ data: trips })
    : res.json({ message: "no trips" });
});

router.post("/delete-trip", async (req, res) => {
  const { _id } = req.body;
  const deleteTrip = await TripModel.findOneAndDelete({ _id });
});

router.post("/update-seats", async (req, res) => {
  const { _id, reserved_seats } = req.body;
  const trip = await TripModel.findOneAndUpdate(
    { _id },
    { reserved_seats: [...reserved_seats] }
  );
});

module.exports = router;
