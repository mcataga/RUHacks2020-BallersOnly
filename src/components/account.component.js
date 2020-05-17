import React, { Component,show,handleShow,handleClose,useState } from 'react';
import { Card,Button,ListGroup,ListGroupItem,Modal } from "react-bootstrap"
import {
    Grid,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/'

export default class Account extends Component {
      
    render() {
        
        return (

        <div id="parent">
            <div className="about-section">
            <h1>Account Details</h1>
            </div>

            <Grid container spacing={2} wrap='nowrap'>
            <Grid item xs={4}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src="https://upload.wikimedia.org/wikipedia/commons/8/82/Kobe_Bryant_2015.jpg" />
                <Card.Body>
                    <Card.Title>Display Picture</Card.Title>
                </Card.Body>
                <ListGroup horizontal>
                    <ListGroup.Item action onClick={null}>Change Picture</ListGroup.Item>
                    
                </ListGroup>
            </Card>
            </Grid>

            <Grid item xs={2}>
            <Card style={{ width: '26rem' }}>
            <ListGroup variant="flush">
                <ListGroup.Item>Username: altond</ListGroup.Item>
                <ListGroup.Item>Email Address: altonrulez@hotmail.com</ListGroup.Item>
                <ListGroup.Item>Location: North York</ListGroup.Item>
                <ListGroup.Item>Phone Number: 416-241-0241</ListGroup.Item>
                <ListGroup.Item>Number of Posts: 22</ListGroup.Item>
            </ListGroup>
            </Card>
            </Grid>
            </Grid>
        </div>

        
        )
    }
}
