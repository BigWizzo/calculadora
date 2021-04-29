import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <div className="nav-wrapper">
      <div className="logo">Math Magician</div>
      <div className="nav">
        <Link to="/" className="nav-link">Home </Link>
        <Link to="/calculator" className="nav-link">Calculator </Link>
        <Link to="/quote" className="nav-link">Quote </Link>
      </div>
    </div>
  </>
);

export default Navbar;
