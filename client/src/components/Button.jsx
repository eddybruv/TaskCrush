import React from 'react';
import { Link} from 'react-router-dom'
import './componentStyles/button.css';

const Button = ({btnText, path}) => {
  return (
    // <button>{btnText}</button>
    <button><Link className="link" to={path}>{btnText}</Link></button>
  )
}
export default Button