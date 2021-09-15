import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'
 class WeatherDay extends Component {
    render() {
        return (
        //   <Card style={{ width: '18rem' }}>

        //   <Card.Body>
        //     <Card.Title>{this.props.city_name} Broadcast</Card.Title>
        //     <Card.Text>
             
        //       <h2>{this.props.description}</h2>
        //       <h2>{this.props.date}</h2>
        //     </Card.Text>

        //   </Card.Body>
        // </Card>
        <Accordion>
        <Accordion.Item >
            <Accordion.Header>{this.props.date}</Accordion.Header>
            <Accordion.Body>
            {this.props.description}
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>

        )
    }
}

export default WeatherDay
