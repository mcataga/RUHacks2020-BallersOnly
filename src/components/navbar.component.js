import React, { Component } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Navbar,NavItem,Nav,Button } from "react-bootstrap"
=======
import ListingModal from './listing-modal.component';
>>>>>>> c5e303c2886572933c30ee2957dc259841ed399b

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
<<<<<<< HEAD
    </nav>  
      
=======
        <ListingModal/>
      </nav>
>>>>>>> c5e303c2886572933c30ee2957dc259841ed399b
    );
  }
}