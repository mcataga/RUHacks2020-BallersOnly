import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar,NavItem,Nav,Button } from "react-bootstrap";
import ListingModal from './listing-modal.component';
import logo from '../pictures/logo5.png';

export default class NavbarMain extends Component {

  render() {
    return (
    <div className="navbar-wrapper">
    <Navbar className="navbar navbar-dark bg-dark navbar-expand-lg">
      
    <Navbar.Brand className="logo" href="/home">
      <img
        src={logo}
        width="20"
        height="20"
        className="d-inline-block align-top"
        alt="abc"
        

      />
    </Navbar.Brand>
    <Nav>
    <Nav.Link href="/listings">Listings</Nav.Link>
    <Nav.Link href="/aboutus">About Us</Nav.Link>
    <Nav.Link href="/account">Account</Nav.Link>
    </Nav>
   
        <ListingModal/>
    
    
   
    </Navbar>
    </div>
    );
  }
}