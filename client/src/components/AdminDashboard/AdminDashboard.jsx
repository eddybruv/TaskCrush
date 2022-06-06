import React from "react";
import AdminHeader from "./AdminHeader";
import Ticket from '../../components/Ticket'
import './adminDash.css'
const AdminDashboard = ({BusNum}) =>{
    return <div className="body">
        <AdminHeader agencyname={"Soar"} />
        <div className="journeys">
            <Ticket  location={"Bamenda"} destination={"Yaounde"} price={5500} busNum={456} timeOfDay={"day"} timeOfDeparture={"4:00pm"} dateOfDeparture={"June 5"}/>
            <Ticket  location={"Buea"} destination={"Bamenda"} price={6000} busNum={25} timeOfDay={"Night"} timeOfDeparture={"4:00pm"} dateOfDeparture={"June 5"}/>
            <Ticket  location={"Limbe"} destination={"Kumba"} price={5500} busNum={215} timeOfDay={"day"} timeOfDeparture={"4:00pm"} dateOfDeparture={"June 5"}/>
            <Ticket  location={"Douala"} destination={"Yaounde"} price={500} busNum={225} timeOfDay={"Night"} timeOfDeparture={"4:00pm"} dateOfDeparture={"June 5"}/>
        </div>
        <section>
            <h1>Bus { BusNum } Info</h1>
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

}
export default AdminDashboard