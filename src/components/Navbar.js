import React, { useState } from 'react';
import "../css/Navbar.css";
import Rout from '../routes/allroutes';
import { Link } from 'react-router-dom';

// Navbar component
const Navbar = ({ isLoggedIn, onLogout }) => (
  <nav className='navbar'>
    <img className='fb' src="https://c.clc2l.com/c/thumbnail280/t/f/a/facebook-lite-PxUqXY.png" />
    <Link to="/home">
    <div className='navbar__item'>Home</div>
    </Link >
    {isLoggedIn ? (
      <>
        <Link to="/posts">
        <div className='navbar__item'>Posts</div>
        </Link>
        
        <div className='navbar__item' onClick={onLogout}>Logout</div>
      </>
    ) : (
      <>
      <Link to="/login">
        <div className='navbar__item' >Login</div>
        </Link>
        <Link to="/signup">
        <div className='navbar__item'onClick={onLogout}>Signup</div>
        </Link>
      </>
    )}
  </nav>
);

export default Navbar;