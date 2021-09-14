import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Map from './Map';

 class Location extends Component {
    render() {
        return (

            <>
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
                <br /><br />
                <Map city_name={this.props.city_name}
                    MapLoc={this.props.MapLoc}
                    lat={this.props.lat}
                    lon={this.props.lon} />
                    <br/><br/>
        
                   
            </>







        )
    }
}

export default Location
