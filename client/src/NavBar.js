import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
      <div>
        <nav>
          <NavLink to="/logout">Logout</NavLink>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/feed">Feed</NavLink>
        </nav>
      </div>
    );
  }
  
  export default Navbar;