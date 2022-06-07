import React from 'react'
import './componentStyles/CustomInputStyles.css'

const CustomInputs = ({placeholder, setState, value}) => {
  return (
    <label className="custom-field one" for="">
        <input  type="text" required value={value} onChange={(e) => setState(e.target.value)}/>
        <span className="placeholder">{placeholder}</span>
    </label>
  )
}

export default CustomInputs