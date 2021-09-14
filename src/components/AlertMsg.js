import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
 class AlertMsg extends Component {
  
    render() {
        return (
          
    
           
                <Alert  variant="danger" dismissible>
                  <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                  <p>
                  Kindly enter a valid location.
                  </p>
                </Alert>
            
        )
    }
}

export default AlertMsg
