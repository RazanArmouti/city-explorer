import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
export class Map extends Component {
    render() {
        return (
            <Card style={{ width:'750px', height:'600px' ,backgroundColor:'#E7EAB5'} }>
                <Card.Body>
                    <Card.Title> <h1>{this.props.city_name}</h1></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"> <h3>{this.props.lat}/{this.props.lon}</h3></Card.Subtitle>
                    <Card.Text>
                        <iframe src={this.props.MapLoc} style={{ width: '600px', height:'400px' } }>
                        </iframe>
                    </Card.Text>

                </Card.Body>
            </Card>
        )
    }
}

export default Map
