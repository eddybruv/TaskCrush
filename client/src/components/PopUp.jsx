import React, { useContext, useState, useEffect } from "react";
import SeatProvider, { SeatContext } from "../SeatContext";
import "./componentStyles/PopUp.css";
import Seat from "./partials/Seat";
import axios from "axios";

const PopUp = ({ closeModal, tripDetails }) => {
  // console.log(tripDetails);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const { seats, setSeats } = useContext(SeatContext);
  const [price, setPrice] = useState(0);

  const findPrice = () => {
    let numOfSeats = seats.length;
    let total = tripDetails.price * numOfSeats;
    setPrice(total);
  };

  window.scrollTo(
    {
      top: 0,
      behavior: 'smooth'
    }
  );

  useEffect(() => {
    findPrice();
  }, [seats]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const numberOfSeats = seats.length;
    let res1 = await axios.post("/api/user/book-trip", {
      user_id: user._id,
      trip_id: tripDetails._id,
      numberOfSeats,
    });
    alert("Trip booked successfully");
    closeModal();
    let res2 = await axios.post("/api/trip/update-seats", {
      _id: tripDetails._id,
      reserved_seats: [...tripDetails.reserved_seats, ...seats],
    });

    await setSeats([]);
    console.log(seats);
    window.location.reload();
  };

  return (
    <>
      <div className="dark">
        <div className="containerSecondary">
          <h2>Book A ticket Now</h2>
          <div className="box">
            <div className="rright">
              <div className="seatSelection">
                <div className="code">
                  <div className="meaning">
                    <div className="seat"></div>
                    <h4>Available</h4>
                  </div>
                  <div className="meaning">
                    <div className="seat green seat-selected"></div>
                    <h4>Selected</h4>
                  </div>
                  <div className="meaning">
                    <div className="seat seat-booked"></div>
                    <h4>Reserved</h4>
                  </div>
                </div>
                <div className="bus-seats">
                  {[...Array(tripDetails.bus_id.seats)].map((item, index) => {
                    return (
                      <Seat
                        key={index}
                        index={index}
                        state={`${
                          tripDetails.reserved_seats.indexOf(index) == -1
                            ? "free"
                            : "booked"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="lleft">
              <h3>Choose a payment method</h3>
              <div className="payment">
                <div className="choice">
                  <input type="radio" name="payment" />
                  <div className="img"></div>
                </div>
                <div className="choice">
                  <input type="radio" name="payment" />
                  <div className="img2"></div>
                </div>
              </div>
              <div className="options">
                <a onClick={handleSubmit} className="btn submit">
                  Book
                </a>
                <a className="btn cancel" onClick={closeModal}>
                  Cancel
                </a>
              </div>
              <div className="price">
                <h3>Total Price</h3>
                <p>{price} FCFA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PopUp;
