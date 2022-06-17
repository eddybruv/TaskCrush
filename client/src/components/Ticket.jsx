import React,{ useState } from 'react'
import './componentStyles/ticket.css'
import PopUp from './PopUp';


const Ticket = ({departure, destination, price, arr_time,dept_time, bus_id, date}) => {
 
  const [showModal, setShowModal] = useState(false);
  const tripDetails = {
    departure,
    destination,
    price,
    arr_time,
    dept_time,
    bus_id,
    date
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
        <PopUp
          closeModal={() => setShowModal(false)}
          tripDetails={tripDetails}
        />
      )}
    </div>
  );
}

export default Ticket