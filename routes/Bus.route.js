const express = require("express");
const res = require("express/lib/response");
const mongoose = require("mongoose");

const router = express.Router();

const BusModel = require("../models/Bus.model");

router.post("/create-bus", (req, res) => {
  const { number, name, seats } = req.body;
  const newBus = new BusModel({ number, name, seats });
  newBus.save();
  res.json({ message: "bus created", data: newBus });
});

router.get("/get-buses", (req, res) => {
  const buses = BusModel.find({});
  buses.length !== 0
    ? res.json({ data: buses })
    : res.json({ message: "no buses" });
});

module.exports = router;
