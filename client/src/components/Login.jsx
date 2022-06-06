import React from 'react'
// import { Link} from 'react-router-dom'
import './componentStyles/Form.css'
import CustomInputs from './CustomInputs'
import Button from './Button'
const Login = () => {
  return (
    <div className='ccontainer'>
      <div className="Rright">
        <div className="rightChild"></div>
      </div>
      <div className="Lleft">
          <form action="">
            <h1>Login</h1>
            <CustomInputs placeholder={"Email"}/>
            <CustomInputs placeholder={"Password"}/>
            <Button btnText={"Login"}/>
           {/* <Button btnText={"Login"} path = {"/UserPanel"}/> */}
           {/* <Link to="/Login">Sign Up</Link> */}
          </form>
      </div>
    </div>
  )
}

export default Login
