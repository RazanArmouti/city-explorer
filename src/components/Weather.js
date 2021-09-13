import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
 class Weather extends Component {
    render() {
        return (
            <Alert variant="success">
            <Alert.Heading><h1>{this.props.city_name}</h1></Alert.Heading>
            <p>
            <h3>{this.props.description}</h3>
            <h3>{this.props.date}</h3>
            </p>
            <hr />
            <p className="mb-0">
            <h3>{this.props.lat}/{this.props.lon}</h3>
            </p>
          </Alert>
        )
    }
}

export default Weather
