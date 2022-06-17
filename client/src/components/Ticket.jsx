import React, { useState } from "react";
import SeatProvider from "../SeatContext";
import "./componentStyles/ticket.css";
import PopUp from "./PopUp";

const Ticket = ({
  _id,
  departure,
  destination,
  price,
  arr_time,
  dept_time,
  bus_id,
  date,
  reserved_seats,
}) => {
  const [showModal, setShowModal] = useState(false);
  const tripDetails = {
    _id,
    departure,
    destination,
    price,
    arr_time,
    dept_time,
    bus_id,
    date,
    reserved_seats,
  };

  const handleClose = () => {
    setShowModal(false);
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
        <button onClick={() => setShowModal(true)}>Book</button>
      </div>
      {showModal && (
        <SeatProvider>
          <PopUp
            closeModal={handleClose}
            tripDetails={tripDetails}
          />
        </SeatProvider>
      )}
    </div>
  );
};

export default Ticket;
