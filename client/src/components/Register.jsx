import React from 'react'
import './componentStyles/Form.css'
import './componentStyles/Register.css'
import Button from './Button'
import CustomInputs from './CustomInputs'
const Register = () => {
  return (
    <div className='ccontainer'>
      <div className="Rright ">
        <div className="rightChild ss"></div>
      </div>
      <div className="Lleft">
          <form action="">
            <h1>Register</h1>
            
            <CustomInputs placeholder={"First Name"}/>
            <CustomInputs placeholder={"Last Name"}/>
            <CustomInputs placeholder={"Email"}/>
            <CustomInputs placeholder={"Password"}/>
            <Button btnText={"Register"} path={"/"} />
          </form>
      </div>
    </div>
  )
}

export default Register
