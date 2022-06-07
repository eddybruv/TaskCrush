import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import './componentStyles/Form.css'
import CustomInputs from './CustomInputs'
import Button from './Button'
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  return (
    <div className='ccontainer'>
      <div className="Rright">
        <div className="rightChild"></div>
      </div>
      <div className="Lleft">
          <form action="">
            <h1>Login</h1>
            <CustomInputs placeholder={"Email"} value={email} setState={setEmail} />
            <CustomInputs placeholder={"Password"} value={password} setState={setPassword}/>
            {/* <Button btnText={"Login"}/> */}
           <Button btnText={"Login"} path = {"/user-panel"}/>
           <Link className="linkk" to="/register">Sign Up</Link>
          </form>
      </div>
    </div>
  )
}

export default Login
