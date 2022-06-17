import React, { useContext, useState, useEffect } from "react";
import { SeatContext } from "../../SeatContext";

import classes from "./seat.module.css";

const Seat = ({ index, state }) => {
  const [selected, setSelected] = useState(false);

  const { seats, setSeats } = useContext(SeatContext);

  const handleClick = () => {
    if(state === 'booked'){
      return;
    }
    setSelected((selected) => !selected);
    if (selected) {
      let temp = Array.from(seats);
      temp.splice(temp.indexOf(index), 1);
      setSeats(temp);
    } else {
      setSeats([...seats, index]);
    }
  };

  return (
    <div
      className={`${classes.seats} ${selected ? classes.selected : ""} ${state === "booked" ? classes.booked : ""}`}
      onClick={handleClick}
    ></div>
  );
};

export default Seat;
