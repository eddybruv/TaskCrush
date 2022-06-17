import React, { useState } from "react";

import classes from './seat.module.css'

const Seat = () => {
  const [selected, setSelected] =  useState(false);

  return <div className={`${classes.seats} ${selected? classes.selected: ''}`} onClick={() => setSelected(selected => !selected)}></div>;
}

export default Seat;
