import React, { Component } from 'react'
import {Card ,Col} from 'react-bootstrap';

 class Movie extends Component {
    render() {
        return (
            <Col>
            <Card bg="secondary" text="white" style={{margin:"30px 5px"}}>
              <Card.Img variant="top" src={this.props.image_url} />
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                  {`${this.props.movie.overview.substring(0,100)}... `}<a style={{color:"white"}} href="#">read more</a>
                </Card.Text>
                <Card.Text variant="primary">
                  Average Votes {this.props.average_votes}
                </Card.Text>
                <Card.Text>
                  Total Votes  {this.props.total_votes}
                </Card.Text>
                <Card.Text>
                Popularity  {this.props.popularity}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
            <small >Released On  {this.props.released_on}</small>
            </Card.Footer>
            </Card>
            </Col>


        )
    }
}

export default Movie
