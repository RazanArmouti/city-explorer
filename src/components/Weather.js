import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
 class Weather extends Component {
    render() {
        return (
          <Card style={{ width: '18rem' }}>

          <Card.Body>
            <Card.Title>{this.props.city_name} Broadcast</Card.Title>
            <Card.Text>
             
              <h2>{this.props.description}</h2>
              <h2>{this.props.date}</h2>
            </Card.Text>

          </Card.Body>
        </Card>

        )
    }
}

export default Weather
