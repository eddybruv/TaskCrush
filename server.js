const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded());


const UserRoute = require("./routes/User.route");
const BusRoute = require("./routes/Bus.route");
const TripRoute = require("./routes/Trip.route");

const connection = mongoose.connect(
  "mongodb+srv://Sonia:ZENNIA0709@cluster0.hcmtn.mongodb.net/BusDB?retryWrites=true&w=majority"
);

connection.then(() => console.log("Database connected"));
connection.catch(() => console.log("Database not connected"));


app.use("/api/user", UserRoute);
app.use("/api/bus", BusRoute);
app.use("/api/trip", TripRoute);

const PORT = 5000;

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
