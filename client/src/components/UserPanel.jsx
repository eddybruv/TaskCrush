import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./componentStyles/UserPanel.css";
import Header from "./Header";
import Ticket from "./Ticket";


const UserPanel = () => {

  const [trips, setTrips] = useState(null);
  const [showTrips, setShowTrips] = useState(false);
  const [books, setBooks] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    const fetchData = () => {
      axios
        .post("/api/user/get-books", { user_id: user._id })
        .then((data) => setBooks(data.data.data));
    };
    fetchData();
  }, [refresh]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios
        .get("/api/trip/get-trips")
        .then((data) => setTrips(data.data.data));
    };

    fetchData();
  }, [refresh]);

  return (
    <div className="cContainer">
      <Header agencyName={"Soar"} />
      <div className="Ucontainer">
        {trips !== null
          ? trips.map((journey) => <Ticket key={journey.busNum} {...journey} refreshPage={() => setRefresh(!refresh)} />)
          : ""}
      </div>
      <div className={`userTrips ${showTrips ? "anim" : "hide"}`}>
        <h3>User Trips for {user.firstName}</h3>
        <div className="tripsBody">
          {books.map((book, index) => (
            <div className="trip" key={index}>
              <h5>Depature</h5>
              <p>{book.trip_id.departure}</p>
              <h5>Arrival</h5>
              <p>{book.trip_id.destination}</p>
              <h5>Number of Seats</h5>
              <p>{book.numberOfSeats}</p>
            </div>
          ))}
        </div>
        {/* <div className="trip-bg"></div> */}
      </div>
      <div className="openTrips" onClick={() => setShowTrips(!showTrips)}>
        {showTrips ? <p>&lArr;</p> : <p>&rArr;</p>}
      </div>
    </div>
  );
};

export default UserPanel;
