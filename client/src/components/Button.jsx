import React from 'react';
import { Link} from 'react-router-dom'
import './componentStyles/button.css';

const Button = ({btnText, path}) => {
  return (
    // <button>{btnText}</button>
    <Link className="link" to={`${path}`}><button>{btnText}</button></Link>
  )
}
export default Button