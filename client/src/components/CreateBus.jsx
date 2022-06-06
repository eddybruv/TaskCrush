import React from 'react'
import CustomInputs from '../components/CustomInputs'
import Button from './Button'
import '../components/componentStyles/CreateBus.css'
const CreateBus = () => {
  return (
    <div>
        <section>
            <div className="fform">
                <h1>Create a Journey</h1>
                <form className='busCreationForm' action="">
                    <CustomInputs placeholder={"location"}/>
                    <CustomInputs placeholder={"Destinatoin"}/>
                    <CustomInputs placeholder={"time of Day"}/>
                    <CustomInputs placeholder={"Price"}/>
                    <CustomInputs placeholder={"Time of departure"}/>
                    <CustomInputs placeholder={"Bus number"}/>
                    <Button btnText={"Submit"} path="/" />
                </form>
            </div>
        </section>
    </div>
  )
}

export default CreateBus