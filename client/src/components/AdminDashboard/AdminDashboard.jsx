import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminTicket from "../../components/AdminTicket";
import "./adminDash.css";
import axios from "axios";

const AdminDashboard = ({ BusNum }) => {
  const [trips, setTrips] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios
        .get("/api/trip/get-trips")
        .then((data) => setTrips(data.data.data));
    };

    fetchData();
  }, []);

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

  return (
    <div className="body">
      <AdminHeader agencyname={"Soar"} />
      <h2>Current Trips</h2>
      <br />
      <div className="journeys">
        {trips !== null
          ? trips.map((journey) => <AdminTicket key={journey.busNum} {...journey} />)
          : ""}
      </div>
      <section>
        <h1>Bus {BusNum} Info</h1>
        <table>
          <tr>
            <th>S/N</th>
            <th>Passenger Name</th>
            <th>Seat number</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </section>
    </div>
  );
};
export default AdminDashboard;
