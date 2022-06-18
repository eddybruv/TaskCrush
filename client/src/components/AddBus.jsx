import React, { useState } from "react";
import CustomInputs from "./CustomInputs";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./componentStyles/addbus.css";

const AddBus = ({ closeModal }) => {
  const [busName, setBusName] = useState("");
  const [seats, setSeats] = useState(0);
  const [busNumber, setBusNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("/api/bus/create-bus", {
      name: busName,
      seats,
      number: busNumber
    });

    closeModal();

  };

  return (
    <div className="addbody">
      <div className="container">
        {/* <div className="closeField">
          <p onClick={closeModal}>X</p>
        </div> */}
        <form>
          <h3>Add New Bus</h3>
          <CustomInputs
            placeholder="Bus Name"
            value={busName}
            setState={setBusName}
          />
          <CustomInputs
            placeholder="Number of Seats"
            value={seats}
            setState={setSeats}
          />
          <CustomInputs
            placeholder="Bus Number"
            value={busNumber}
            setState={setBusNumber}
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddBus;
