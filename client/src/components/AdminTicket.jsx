import React, { useState } from "react";
import "./componentStyles/ticket.css";
import PopUp from "./PopUp";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminTicket = ({
  departure,
  destination,
  price,
  busNum,
  arr_time,
  dept_time,
  dateOfDeparture,
  bus_id,
  date,
  _id,
}) => {
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();
    console.log(_id)
    await axios.post("/api/trip/delete-trip", {_id});
    window.location.reload(false);
  }


  return (
    <div className="main">
      <div className="right">
        <h3 className="location">{departure}</h3>
        <p>{date}</p>
        <p>{arr_time}</p>
        <h3 className="location">{destination}</h3>
        <label className="busNum">Bus Name: {bus_id.name}</label>
      </div>
      <div className="line"></div>
      <div className="left">
        <h3>
          Departure time: <br />
          <br /> {dept_time}
        </h3>
        <label htmlFor="">{price}Frs</label>
        <button onClick={handleDelete} className="cancel">Cancel Trip</button>
      </div>
    </div>
  );
};

export default AdminTicket;
