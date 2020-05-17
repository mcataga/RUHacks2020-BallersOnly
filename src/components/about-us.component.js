import React, { Component,show,handleShow,handleClose,useState } from 'react';
import { Card,Button,ListGroup,ListGroupItem,Modal,CardDeck } from "react-bootstrap"
import {
    Grid,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/'
import '../App.css';

export default class AboutUs extends Component {
      
    render() {
        
        return (

        <div id="parent">
            <div class="about-section">
            <h1>About Us</h1>
            <p>Meet the creators of BallersOnly.</p>
            </div>

            <CardDeck>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Kobe_Bryant_2015.jpg" className="aboutImage"/>
                <Card.Body>
                    <Card.Title>Alton Dulinen</Card.Title>
                    <Card.Text>
                    6 ft 0 in (in timbs) point guard out of Ryerson University. 
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>18.7ppg, 4.8reb, 9.3ast</ListGroupItem>
                    <ListGroupItem>175lb</ListGroupItem>
                    <ListGroupItem>I can't dunk and I am really self conscious about it.</ListGroupItem>
                </ListGroup>
            </Card>
            

            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F04%2F10%2Flebron-james.jpg" className="aboutImage"/>
                <Card.Body>
                    <Card.Title>Mico Cataga</Card.Title>
                    <Card.Text>
                    6 ft 5 in shooting guard out of Ryerson University.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>22.6ppg, 5.3reb, 3.6ast</ListGroupItem>
                    <ListGroupItem>195lb</ListGroupItem>
                    <ListGroupItem>My fg% is higher than my GPA.</ListGroupItem>
                </ListGroup>
            </Card>
            

           
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5cfe8aa234a5c4000847f74f%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D2370%26cropY1%3D102%26cropY2%3D2474" className="aboutImage"/>
                <Card.Body>
                    <Card.Title>Manveer Gill</Card.Title>
                    <Card.Text>
                    6 ft 10 in power forward out of Ryerson University.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>24.8ppg, 8.7reb, 3.2ast</ListGroupItem>
                    <ListGroupItem>240lb</ListGroupItem>
                    <ListGroupItem>I'm a big man who only shoots three's.</ListGroupItem>
                </ListGroup>
            </Card>
            

            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.biography.com/.image/t_share/MTY2Njc5NDYzOTQ4NDYxNDA4/michael-jordan.jpg" className="aboutImage"/>
                <Card.Body>
                    <Card.Title>Musab Jaseem</Card.Title>
                    <Card.Text>
                    6 ft 7 in small forward out of Ryerson University.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>17.8ppg, 6.3reb, 4.5ast</ListGroupItem>
                    <ListGroupItem>220lb</ListGroupItem>
                    <ListGroupItem>I don't even like basketball. I'm just playing for money.</ListGroupItem>
                </ListGroup>
            </Card>
            

            </CardDeck>

        </div>

        
        )
    }
}
