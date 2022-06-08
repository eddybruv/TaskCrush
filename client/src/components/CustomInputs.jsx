import React from 'react'
import './componentStyles/CustomInputStyles.css'

const CustomInputs = ({placeholder, setState, value, type="text"}) => {
  return (
    <label className="custom-field one" for="">
        <input  type={type} required value={value} onChange={(e) => setState(e.target.value)}/>
        <span className="placeholder">{placeholder}</span>
    </label>
  )
}

export default CustomInputs