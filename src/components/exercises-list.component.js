import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleMaps from './google-maps.component';
import axios from 'axios';

const Listing = props => (
  <Card>
    <Card.Header as="h5">Name: {props.listing.name}</Card.Header>
    <Card.Body>
      <Card.Footer>
        <Card.Title>Location: {props.listing.location} </Card.Title></Card.Footer>
      {/* <GoogleMaps /> */}
      <Card.Text>Description: {props.listing.additional}</Card.Text>
      <Card.Text>Players Required: {props.listing.players}</Card.Text>
      <Card.Text>Email: {props.listing.email}</Card.Text>
      <Card.Footer>
      <Link to={"/edit/" + props.listing._id}>edit</Link> | <a href="#" onClick={() => { props.deleteListing(props.listing._id) }}>delete</a>
      <Button variant="primary">Go somewhere</Button>
      </Card.Footer>
    </Card.Body>
  </Card>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteListing = this.deleteListing.bind(this)

    this.state = { listings: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/listings/')
      .then(response => {
        this.setState({
          listings: response.data.reverse()
        });

      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteListing(id) {
    axios.delete('http://localhost:5000/listings/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      listings: this.state.listings.filter(el => el._id !== id)
    })
  }

  listingList() {
    return this.state.listings.map(currentlisting => {
      return <Listing listing={currentlisting} deleteListing={this.deleteListing} key={currentlisting._id} />;
    })
  }

  render() {
    return (
      <div>
        {this.listingList()}
      </div>
    )
  }
}