import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

 function Navbar() {

  return (
     
        <div id='Navvbar'>
           <Link to='/'>Home</Link>
           <Link to='/city/:id'>city</Link>

          </div>

    
  );
}
export default Navbar