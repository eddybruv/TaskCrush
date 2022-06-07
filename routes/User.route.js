const mongoose = require("mongoose");
const express = require("express");

const UserModel = require("../models/User.model");
const res = require("express/lib/response");
const BookModel = require("../models/Book.model");
const router = express.Router();

router.post("/create-user", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = new UserModel({ firstName, lastName, email, password });
  newUser.save();

  res.json({ message: "user create", data: data });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const userFound = UserModel.find({ email, password });

  userFound
    ? res.json({ message: "user found", data: userFound })
    : res.json({ message: "user not found" });
});

router.post("/book-trip", (req, res) => {
  const {user_id, trip_id} =req.body;
  const newBook = new BookModel({user_id, trip_id});
  newBook.save();

  res.json({message: "book created", data: newBook});
})

module.exports = router;
