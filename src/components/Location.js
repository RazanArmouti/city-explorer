import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export class Location extends Component {
    render() {
        return (
            
           
                  <Modal show={this.props.showModal} onHide={this.props.handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title> <h1>{this.props.city_name}</h1></Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                                  
                    <h3>{this.props.lat}/{this.props.lon}</h3>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>Close</Button>
                       
                    </Modal.Footer>
                </Modal>
                
               
               
               

           
        )
    }
}

export default Location
