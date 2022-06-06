import React from 'react'
import './componentStyles/Header.css'
const Header = ({agencyName}) => {
  return (
    <div className='top'>
        <h2>{agencyName}</h2>
    </div>
  )
}

export default Header