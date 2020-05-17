import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import axios from 'axios';

class ListingModal extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	render() {
		return (
			<>
				<Button variant="primary" onClick={this.handleShow}>
					Create Listing
			</Button>
				<Modal show={this.state.show} onHide={this.handleClose} size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered>
					<Modal.Header closeButton>
						<Modal.Title>Create Listing</Modal.Title>
					</Modal.Header>
					<Modal.Body>

						<Form>
							<Form.Group controlId="formBasicName">
								<Form.Label>Name</Form.Label>
								<Form.Control type="email" placeholder="Enter your name" />
							</Form.Group>

							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
    							</Form.Text>
							</Form.Group>

							<Form.Group controlId="formBasicNumber">
								<Form.Label>Number</Form.Label>
								<Form.Control type="tel" placeholder="Enter number" />
							</Form.Group>

							<Form.Group controlId="formBasicDescription">
								<Form.Label>Additional Information</Form.Label>
								<Form.Control type="text" placeholder="Any additional information" />
							</Form.Group>

							<Form.Group controlId="formBasicPlayers">
								<Form.Label>Required Players</Form.Label>
								<Form.Control as="select" value="Choose...">
        							<option>1</option>
        							<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
      							</Form.Control>
    						</Form.Group>

							<Form.Group controlId="formBasicLocation">
								<Form.Label>Location</Form.Label>
								<Form.Control type="text" placeholder="Your location" />
							</Form.Group>


							<Button variant="primary" type="submit">
								Submit
 							 </Button>
						</Form>

					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
					</Button>
						<Button variant="primary" onClick={this.handleClose}>
							Save Changes
					</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default () => (<div><ListingModal /></div>)