import React, { useContext, useState, useEffect } from "react";
import SeatProvider, { SeatContext } from "../SeatContext";
import "./componentStyles/PopUp.css";
import Seat from "./partials/Seat";

const PopUp = ({ closeModal, tripDetails }) => {
  console.log(tripDetails);
  const { seats } = useContext(SeatContext);
  const [price, setPrice] = useState(0);

  const findPrice = () => {
    let numOfSeats = seats.length;
    let total = tripDetails.price * numOfSeats;
    setPrice(total);
  };

  useEffect(() => {
    findPrice();
  }, [seats]);

  return (
    <>
      <div className="dark">
        <div className="containerSecondary">
          <h2>Book A ticket</h2>
          <div className="box">
            <div className="rright">
              <div className="seatSelection">
                <div className="code">
                  <div className="meaning">
                    <div className="seat seat-reserved"></div>
                    <h4>Reserved</h4>
                  </div>
                  <div className="meaning">
                    <div className="seat green seat-selected"></div>
                    <h4>Selected</h4>
                  </div>
                  <div className="meaning">
                    <div className="seat seat-booked"></div>
                    <h4>Booked</h4>
                  </div>
                </div>
                <div className="bus-seats">
                  {[...Array(tripDetails.bus_id.seats)].map((item, index) => {
                    return <Seat index={index} />;
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
                <a className="btn submit">Book</a>
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
