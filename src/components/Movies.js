import React, { Component } from 'react'
import {Row} from 'react-bootstrap';
import Movie from './Movie';

 class Movies extends Component {
    render() {
        return (
            <>
            <h2 style={{margin:"20px auto"}}>Movies</h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {this.state.movie.map((e, idx) => (
             < Movie movie={e} key={idx} 
             city_name={this.props.city_name}
                 title={this.props.title}
                 overview={this.props.overview}
                 average_votes={this.props.average_votes}
                 total_votes={this.props.total_votes}
                 image_url={this.props.image_url}
                 popularity={this.props.popularity}
                 released_on={this.props.released_on}
            />
            ))}
          </Row>
          </>
        )
    }
}

export default Movies
