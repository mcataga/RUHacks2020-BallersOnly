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
            <div class="about-section">
            <h1>Account Details</h1>
            </div>

            <Grid container spacing={2} wrap='nowrap'>
            <Grid item xs={4}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src="https://i.redd.it/o4087j24css31.jpg" />
                <Card.Body>
                    <Card.Title>MicoC</Card.Title>
                </Card.Body>
                <ListGroup vertical>
                    <ListGroup.Item action onClick={null}>Change Picture</ListGroup.Item>
                    <ListGroup.Item action onClick={null}>Logout</ListGroup.Item>
                </ListGroup>
            </Card>
            </Grid>

            <Grid item xs={2}>
            <Card style={{ width: '26rem' }}>
            <ListGroup variant="flush">
                <ListGroup.Item>Name: Mico Cataga</ListGroup.Item>
                <ListGroup.Item>Email Address: mcataga@ryerson.ca</ListGroup.Item>
                <ListGroup.Item>Location: North York</ListGroup.Item>
                <ListGroup.Item>Phone Number: 416-241-0241</ListGroup.Item>
                <ListGroup.Item>Matches Accepted: 22</ListGroup.Item>
            </ListGroup>
            </Card>
            </Grid>
            </Grid>
        </div>

        
        )
    }
}
