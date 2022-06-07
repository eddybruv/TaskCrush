import React, { useState } from 'react'
import './componentStyles/Form.css'
import './componentStyles/Register.css'
import Button from './Button'
import CustomInputs from './CustomInputs'


const Register = () => {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='ccontainer'>
      <div className="Rright ">
        <div className="rightChild ss"></div>
      </div>
      <div className="Lleft">
          <form action="">
            <h1>Register</h1>
            
            <CustomInputs placeholder={"First Name"} value={fname} setState={setFname} />
            <CustomInputs placeholder={"Last Name"} value={lname} setState={setLname} />
            <CustomInputs placeholder={"Email"} value={email} setState={setEmail} />
            <CustomInputs placeholder={"Password"} value={password} setState={setPassword} />
            <Button btnText={"Register"} path='/'/>
            {/* <button className="btn btn-primary btn-lg btn-block" type="submit">Register</button> */}
          </form>
      </div>
    </div>
  )
}

export default Register
