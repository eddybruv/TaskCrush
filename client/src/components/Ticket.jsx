import React from 'react'
import './componentStyles/ticket.css'
const Ticket = ({location, destination, price, busNum, timeOfDay,timeOfDeparture, dateOfDeparture}) => {
  return (
    <div className='main'>
        <div className="right">
            <h3 className='location'>{location}</h3>
            <p>{timeOfDay}</p>
            <p>{dateOfDeparture}</p>
            <h3 className='location'>{destination}</h3>
            <label className='busNum'>Bus Number: {busNum}</label>

        </div>
        <div className="line"></div>
        <div className="left">
          <h3>Departure time: <br /><br /> {timeOfDeparture}</h3>
          <label htmlFor="">{price}Frs</label>
        </div>
    </div>
  )
}

export default Ticket