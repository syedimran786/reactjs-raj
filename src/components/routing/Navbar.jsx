import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"


function Navbar() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="aboutus">About Us</Link>
        <Link to="services">Services</Link>
        <Link to="products">Products</Link>
        <Link to="login">Login</Link>
    </nav>
  )
}

export default Navbar