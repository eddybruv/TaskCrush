const mongoose = require("mongoose");
const express = require("express");

const UserModel = require("../models/User.model");
const BookModel = require("../models/Book.model");
const res = require("express/lib/response");
const router = express.Router();

router.post("/create-user", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = await new UserModel({ firstName, lastName, email, password });
  newUser.save();

  res.json({ message: "user create", data: newUser });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userFound = await UserModel.findOne({ email, password });

  userFound
    ? res.json({ message: "user found", data: userFound })
    : res.json({ message: "user not found" });
});

router.post("/book-trip", async (req, res) => {
  const { user_id, trip_id } = req.body;
  const newBook = await new BookModel({ user_id, trip_id });
  newBook.save();

  res.json({ message: "book created", data: newBook });
});

router.post("/get-books", async (req, res) => {
  const { user_id } = req.body;
  const trips = await BookModel.find({ user_id });

  trips
    ? res.json({ message: "user found", data: trips })
    : res.json({ message: "user not found" });
});

module.exports = router;
