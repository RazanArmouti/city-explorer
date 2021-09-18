import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
 class AlertMsg extends Component {
  
    render() {
        return (
          
        //     <Toast>
        //     <Toast.Body>
        //       <p>You got an error!</p>
        //       <p> Kindly enter a valid location.</p>
  
        //     </Toast.Body>
        //   </Toast>
           
                <Alert  variant="danger" dismissible>
                  <Alert.Heading>You got an error!</Alert.Heading>
                  <p>
                      Kindly enter a valid location.
                  </p>
                </Alert>
            
        )
    }
}

export default AlertMsg
