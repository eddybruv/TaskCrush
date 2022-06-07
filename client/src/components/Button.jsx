import React from 'react';
import { Link} from 'react-router-dom'
import './componentStyles/button.css';

const Button = ({btnText, path, handleAction}) => {
  return (
    // <button>{btnText}</button>
    <Link className="link" to={`${path}`}><button onClick={handleAction}>{btnText}</button></Link>
  )
}
export default Button