import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HomeButton from './homebutton.component';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function HomePage() {

   

    const classes = useStyles();

    
        return (

            <div id="bg">
            <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <h2>The number 1 place to find your next pickup basketball game in the GTA.</h2>
                <Button variant="contained" color="primary" href="/listings" className="homebut">See Listings</Button>
            </div>
            </div>
            
        );
    

}