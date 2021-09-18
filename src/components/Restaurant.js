import React from 'react';
import { Col, Card } from 'react-bootstrap';



class Restaurant extends React.Component {

    render() {
        return (
           
            <Col>
                <Card bg="secondary" text="white" style={{ margin: "30px 5px" }}>
                    <Card.Img src={this.props.Res_image_url} style={{
                        width: '100%',
                        height: '50vh',
                        objectFit: 'cover',
                        maxHeight: '100vh'
                    }} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                     
                        <Card.Text variant="primary">
                            Price {this.props.price}
                        </Card.Text>
                        <Card.Text>
                            Rating  {this.props.rating}
                        </Card.Text>
                        <Card.Text>
                            <a className='anchor' href={this.props.url}>Explore {this.props.name}</a>
                        
                        </Card.Text>
                    </Card.Body>
                  
                </Card>
            </Col>
        )
    }
}

export default Restaurant;
