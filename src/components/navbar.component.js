import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar,NavItem,Nav,Button } from "react-bootstrap"

export default class NavbarMain extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">BallersOnly</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Listings</Link>
          </li>
          <li className="navbar-item">
          <Link to="/aboutus" className="nav-link">About Us</Link>
          </li>
        </ul>
        
        <div className="navbar navbar-dark bg-dark navbar-expand-lg">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link to="/account" className="nav-link">My Account</Link>
            </li>
          </ul>
        </div>

        </div>
    </nav>  
      
    );
  }
}