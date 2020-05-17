import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';

export default class HomeButton extends Component {
    render() {
		return (
			<>
				<Button variant="primary" onClick={this.handleShow}>
					See Listings
			    </Button>
            </>
        )
    }
}