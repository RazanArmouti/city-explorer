import React from 'react';
import { Row } from 'react-bootstrap';
import Restaurant from './Restaurant';

class Restaurants extends React.Component{
   
    render(){
        return (
            <>
            <h2 style={{margin:"20px auto"}}>Restaurants </h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {this.props.resturantdata.map((rest, idx) => (
              <Restaurant restaurant={rest} key={idx} 
              name={rest.name}
              Res_image_url={rest.image_url}
              price={rest.price}
              rating={rest.rating}
              url={rest.url}/>
            ))}
          </Row>
          </>
        )
    }
}

export default Restaurants;