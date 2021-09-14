import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
 class Movie extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>

            <Card.Body>
              <Card.Title>{this.props.city_name} Movies</Card.Title>
              <Card.Text>
                <h2>{this.props.title}</h2>
                <h2>{this.props.overview}</h2>
                <h2>{this.props.average_votes}</h2>
                <h2>{this.props.total_votes}</h2>
                <h2>{this.props.image_url}</h2>
                <h2>{this.props.popularity}</h2>
                <h2>{this.props.released_on}</h2>
              </Card.Text>
  
            </Card.Body>
          </Card>
  
        )
    }
}

export default Movie
