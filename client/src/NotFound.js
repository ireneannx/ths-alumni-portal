import React from 'react';
import Four04 from './images/404.png';
//import { Link } from 'react-router-dom';
import history from './history'

const NotFound = () => {



  return (<div style={{ textAlign: "center", marginTop: "8%" }}>
    <img src={Four04} alt="404 Not Found" />
    <p style={{ textAlign: "center" }}>

      <button class="btn btn-link" onClick={(e) => onClick(e)}>Find your way back home</button>
    </p>
  </div>);
}

const onClick = e => {
  e.preventDefault();
  history.push('/')
}
export default NotFound;