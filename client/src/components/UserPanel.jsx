import axios from "axios";
import React, { useEffect, useState } from "react";
import "./componentStyles/UserPanel.css";
import Header from "./Header";
import Ticket from "./Ticket";
const UserPanel = () => {
  const [trips, setTrips] = useState(null);

  const data = [
    {
      location: "Bamenda",
      destination: "Yaounde",
      price: 5500,
      busNum: 456,
      timeOfDay: "Morning",
      timeOfDeparture: "10:00am",
      dateOfDeparture: "06/06/2022",
    },
    {
      location: "Buea",
      destination: "Bamenda",
      price: 6000,
      busNum: 25,
      timeOfDay: "Evening",
      timeOfDeparture: "4:00pm",
      dateOfDeparture: "05/06/2022",
    },
    {
      location: "Limbe",
      destination: "Kumba",
      price: 5500,
      busNum: 215,
      timeOfDay: "Noon",
      timeOfDeparture: "1:00pm",
      dateOfDeparture: "05/06/2022",
    },
    {
      location: "Douala",
      destination: "Yaounde",
      price: 4500,
      busNum: 225,
      timeOfDay: "Night",
      timeOfDeparture: "7:00pm",
      dateOfDeparture: "12/06/2022",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios
        .get("/api/trip/get-trips")
        .then((data) => setTrips(data.data.data));
    };

    fetchData();
  }, []);

  return (
    <div className="cContainer">
      <Header agencyName={"Soar"} />
      <div className="Ucontainer">
        {trips !== null
          ? trips.map((journey) => <Ticket key={journey.busNum} {...journey} />)
          : ""}
      </div>
    </div>
  );
};

export default UserPanel;
