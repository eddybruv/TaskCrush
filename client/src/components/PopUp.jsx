import React from 'react'
import './componentStyles/PopUp.css'

const PopUp = ({ closeModal, tripDetails }) => {

    console.log(tripDetails);

  return (
    <div className='dark'>
     
      <div className="containerSecondary">
            <h2>Book A ticket</h2>
            <div className="box">
                <div className="rright">
                    <div className="seatSelection">
                        <div className="code">
                            <div className="meaning">
                                <div className="seat"></div>
                                <h4>Selected</h4>
                            </div>
                            <div className="meaning">
                                <div className="seat green"></div>
                                <h4>Available</h4>
                            </div>
                            <div className="meaning">
                                <div className="seat"></div>
                                <h4>Booked</h4>
                            </div>
                        </div>
                        {
                            [...Array(4)].map(
                                (item, i) => {
                                return <div className="seat-row">
                            <div className="seat green"></div>
                            <div className="seat"></div>
                            <div className="space"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                        </div>
                                }
                            )
                        }
                    </div>
                    
                </div>
                <div className="lleft">
                    <h3>Choose a payment method</h3>
                    <div className="payment">
                        <div className="choice">
                            <input type="radio" name="payment"/>
                            <div className="img"></div>
                        </div>
                        <div className="choice">
                            <input type="radio"name="payment" />
                            <div className="img2"></div>
                        </div>
                    </div>
                    <div className='options'>
                        <a className='btn submit'>Book</a>
                        <a className='btn cancel' onClick={closeModal}>Cancel</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default PopUp
