import React from 'react';
import {Link} from 'react-router-dom';

// using semantic UI
const Navbar = () => {
  return (
    <nav className="ui secondary menu">
      <Link className="item" to="/">Home</Link>
      <Link className="item" to="/About">About</Link>
      <Link className="item" to="/ShoppingList">Shopping List</Link>
    </nav>
  )
}

export default Navbar;