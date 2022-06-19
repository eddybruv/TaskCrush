import React, { useEffect, useState } from "react";
import CustomInputs from "../components/CustomInputs";
import Button from "./Button";
import "../components/componentStyles/CreateBus.css";
import AddBus from "./AddBus";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBus = () => {
  const navigate = useNavigate();
  const [location, setLocation] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [busNum, setBusNum] = React.useState("");
  const [timeOfDay, setTimeOfDay] = React.useState("");
  const [timeOfDeparture, setTimeOfDeparture] = React.useState("");
  const [date, setDate] = useState("");

  const [buses, setBuses] = useState(null);

  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    if (busNum !== "Select Bus") {
      console.log(busNum);
    }
  }, [busNum]);

  const handleModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("/api/bus/get-buses")
        .then((data) => setBuses(data.data.data));
    };

    fetchData();
    console.log(buses);
  }, [showModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("/api/trip/create-trip", {
      bus_id: busNum,
      departure: location,
      destination: destination,
      price: price,
      dept_time: timeOfDeparture,
      arr_time: timeOfDay,
      reserved_seats: [],
      date,
    });
    navigate("/admin-dashboard");
  };

  return (
    <div className="section">
      <section>
        <div className="fform">
          <h1>Create a Journey</h1>
          <form className="busCreationForm" action="">
            <CustomInputs
              placeholder={"Departure"}
              value={location}
              setState={setLocation}
            />
            <CustomInputs
              placeholder={"Destination"}
              value={destination}
              setState={setDestination}
            />
            <CustomInputs
              placeholder={"Departure time"}
              value={timeOfDeparture}
              setState={setTimeOfDeparture}
            />
            <CustomInputs
              placeholder={"Arrival time"}
              value={timeOfDay}
              setState={setTimeOfDay}
            />
            <CustomInputs
              placeholder={"Price"}
              value={price}
              setState={setPrice}
            />
            <CustomInputs type="date" value={date} setState={setDate} />

            <div className="busSelect">
              <select
                className="bus-options"
                onClick={(e) => setBusNum(e.target.value)}
              >
                <option value={null}>Select Bus</option>
                {buses !== null
                  ? buses.map((bus, index) => (
                      <option value={bus._id} key={index}>
                        {bus.name}
                      </option>
                    ))
                  : ""}
              </select>
              <button className="add-bus" onClick={handleModal}>
                Add Bus
              </button>
            </div>
            <button onClick={handleSubmit}>Create</button>
          </form>
        </div>
      </section>
      {showModal && <AddBus closeModal={() => setShowModal(false)} />}
    </div>
  );
};

export default CreateBus;
