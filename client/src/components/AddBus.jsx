import React,{useState} from 'react'
import CustomInputs from './CustomInputs'

import './componentStyles/addbus.css'

const AddBus = ({ closeModal }) => {

    const [busName, setBusName] = useState("")
    const [seats, setSeats] = useState(0);
    const [busNumber, setBusNumber] = useState('');



  return (
    <div className='body'>
        <div className='container'>
            <div className='closeField'>
                <p onClick={closeModal}>X</p>
            </div>
            <form>
                <h3>Add New Bus</h3>
                <CustomInputs placeholder="Bus Name" value={busName} setState={setBusName}/>
                <CustomInputs placeholder="Number of Seats" value={seats} setState={setSeats} />
                <CustomInputs placeholder="Bus Number" value={busNumber} setState={setBusNumber} />
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddBus