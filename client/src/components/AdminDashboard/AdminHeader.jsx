import React from 'react'
import './adminDash.css'
import Button from '../Button'

const AdminHeader = ({agencyname}) => {
  return (
    <header>
        <h2>{agencyname}</h2>
        <Button btnText = {"Create Journey"}/>
        
        {/* <Button btnText = {"Create Journey"} path={"/CreateBus"}/> */}
    </header>
  )
}

export default AdminHeader