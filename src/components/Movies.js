import React, { Component } from 'react'
import {Row} from 'react-bootstrap';
import Movie from './Movie';

 class Movies extends Component {
    render() {
        return (
            <>
            <h2 style={{margin:"20px auto"}}>Movies</h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {this.props.moviedata.map((e, idx) => (
             < Movie movie={e} key={idx} 
             city_name={e.city_name}
                 title={e.title}
                 overview={e.overview}
                 average_votes={e.average_votes}
                 total_votes={e.total_votes}
                 image_url={e.image_url}
                 popularity={e.popularity}
                 released_on={e.released_on}
            />
            ))}
          </Row>
          </>
        )
    }
}

export default Movies
