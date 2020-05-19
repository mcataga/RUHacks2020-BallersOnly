import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar,NavItem,Nav,Button } from "react-bootstrap";
import ListingModal from '../listing-modal.component';
import logo from '../../pictures/logo5.png';
import 'whatwg-fetch';
import {
  getFromStorage,
  setInStorage
} from './storage'

export default class NavbarMain extends Component {

  constructor(props){
    super(props);
    this.state = {
      signupError: '',
      loginError: '',
      token: '',
    }
  }

  componentDidMount(){
    const token = getFromStorage('main_app')
    if (token) {
      fetch('/account/verify?token=' + token)
      .then(res => res.json())
      .then(json => {
        if (json.success){
          this.setState({
            token
          })
        }
      })
    } 
  }

  render() {

    const {
      token
    } = this.state;

    /*if (!token){
      return (<div><p>Login</p><p>Sign up</p></div>) 
    }*/

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
    <Nav.Link href="/profile">Profile</Nav.Link>
    </Nav>
   
        <ListingModal/>
    
    
   
    </Navbar>
    </div>
    );
  }
}