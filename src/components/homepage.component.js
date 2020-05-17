import React, { Component,Button } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ListingModal from './listing-modal.component';

export default class HomePage extends Component {

    handleClick = () => {
        console.log('this is:', this);
      }
    render(){
        return (

            <div className="wrapper">
            <div id="bg">
                <h2>The number 1 place to find your next pickup basketball game in the GTA.</h2>
                
            </div>
            </div>
            
        );
    }

}