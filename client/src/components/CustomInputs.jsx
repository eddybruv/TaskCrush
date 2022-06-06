import React from 'react'
import './componentStyles/CustomInputStyles.css'

const CustomInputs = ({placeholder}) => {
  return (
    <label className="custom-field one" for="">
        <input  type="text" required />
        <span className="placeholder">{placeholder}</span>
    </label>
  )
}

export default CustomInputs