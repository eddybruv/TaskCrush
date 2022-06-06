import React from 'react'
import './componentStyles/UserPanel.css'
import Header from './Header'
import Ticket from './Ticket'
const UserPanel = () => {
  return (
    <div className='cContainer'>
        <Header agencyName={"Soar"}/>
        <div className='container'>
            <Ticket  location={"Bamenda"} destination={"Yaounde"} price={5500} busNum={456} timeOfDay={"day"} timeOfDeparture={"4:00pm"} dateOfDeparture={"June 5"}/>
            <Ticket  location={"Limbe"} destination={"Kumba"} price={5500} busNum={215} timeOfDay={"day"} timeOfDeparture={"4:00pm"} dateOfDeparture={"June 5"}/>
            <Ticket  location={"Douala"} destination={"Yaounde"} price={500} busNum={225} timeOfDay={"Night"} timeOfDeparture={"4:00pm"} dateOfDeparture={"June 5"}/>
        </div>
        
    </div>
  )
}

export default UserPanel