import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import axios from 'axios';

export default class ListingModal extends Component {
	constructor(props) {
		super(props);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeName = this.onChangeName.bind(this);
    	this.onChangeEmail = this.onChangeEmail.bind(this);
    	this.onChangeNumber = this.onChangeNumber.bind(this);
		this.onChangeAdditional = this.onChangeAdditional.bind(this);
		this.onChangePlayers = this.onChangePlayers.bind(this);
		this.onChangeLocation = this.onChangeLocation.bind(this);
    	this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			show: false,
			title: '',
			name: '',
			email: '',
			number: '',
			additional: '',
			players: 1,
			location: ''
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	onChangeTitle(e) {
		this.setState({
		  title: e.target.value
		})
		console.log(e.target.value);
	}

	onChangeName(e) {
		this.setState({
		  name: e.target.value
		})
		console.log(e.target.value);
	}
	
	onChangeEmail(e) {
		this.setState({
		  email: e.target.value
		})
		console.log(e.target.value);
	}

	onChangeNumber(e) {
		this.setState({
		  number: e.target.value
		})
		console.log(e.target.value);
	}

	onChangeAdditional(e) {
		this.setState({
		  additional: e.target.value
		})
		console.log(e.target.value);
	}

	onChangePlayers(e) {
		this.setState({
		  players: e.target.value
		})
		console.log(e.target.value);
	}

	onChangeLocation(e) {
		this.setState({
		  location: e.target.value
		})
		console.log(e.target.value);
	}

	onSubmit(e) {
		e.preventDefault();
	
		const listing = {
			title: this.state.title,
			name: this.state.name,
			email: this.state.email,
			number: this.state.number,
			additional: this.state.additional,
			players: this.state.players,
			location: this.state.location
		}
	
		console.log(listing);
	
		axios.post('http://localhost:5000/listings/add', listing)
		  .then(res => console.log("test"));
	
		window.location = '/';
	}

	render() {
		return (
			<>
				<Button variant="primary" onClick={this.handleShow}>
					Create Listing
			</Button>
				<Modal onSubmit={this.onSubmit} show={this.state.show} onHide={this.handleClose} size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered>
					<Modal.Header closeButton>
						<Modal.Title>Create Listing</Modal.Title>
					</Modal.Header>
					<Modal.Body>

						<Form>
							<Form.Group controlId="formBasicTitle">
								<Form.Label>Title</Form.Label>
								<Form.Control type="text" placeholder="Enter your title" value={this.state.title} onChange={this.onChangeTitle}/>
							</Form.Group>

							<Form.Group controlId="formBasicName">
								<Form.Label>Name</Form.Label>
								<Form.Control type="text" placeholder="Enter your name" value={this.state.name} onChange={this.onChangeName}/>
							</Form.Group>

							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.onChangeEmail}/>
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
    							</Form.Text>
							</Form.Group>

							<Form.Group controlId="formBasicNumber">
								<Form.Label>Number</Form.Label>
								<Form.Control type="tel" placeholder="Enter number" value={this.state.number} onChange={this.onChangeNumber}/>
							</Form.Group>

							<Form.Group controlId="formBasicDescription">
								<Form.Label>Additional Information</Form.Label>
								<Form.Control type="text" placeholder="Any additional information" value={this.state.additional} onChange={this.onChangeAdditional}/>
							</Form.Group>

							<Form.Group controlId="formBasicPlayers">
							
								<Form.Label>Required Players</Form.Label>
								<Form.Control as="select" onChange={this.onChangePlayers.bind(this)}>
        							<option>1</option>
        							<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
      							</Form.Control>
								 
    						</Form.Group>

							<Form.Group controlId="formBasicLocation">
								<Form.Label>Location</Form.Label>
								<Form.Control type="text" placeholder="Your location" value={this.state.location} onChange={this.onChangeLocation}/>
							</Form.Group>


							<Button variant="primary" type="submit">
								Submit
 							 </Button>
						</Form>

					</Modal.Body>
				</Modal>
			</>
		);
	}
}

//export default () => (<div><ListingModal /></div>)