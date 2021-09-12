import React, { Component } from 'react'
import './App.css';
import Location from './components/Location';
import SearchForm from './components/SearchForm';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button} from 'react-bootstrap'


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city_name: "",
      MapLoc: "",
      lat: "",
      lon: "",
      showData: false,
      showModal: false,
      zoom: 0,
      msg:false

    }
  }
  handleClose = () => {
    this.setState({
      showModal: false
    })
  }

  handleLocation = (e) => {
    let city_name = e.target.value;
    this.setState({
      city_name: city_name
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}
      &q=${this.state.city_name}&format=json`).then((response) => {

      console.log('city location - Everything is awesome.');
      let responseData = response.data[0]
      this.setState({
        city_name: responseData.display_name,
        lon: responseData.lon,
        lat: responseData.lat,
        MapLoc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${responseData.lat},${responseData.lon}&zoom=10`,
        showData: true,
        showModal: true,
        msg:false
     

      })
      console.log(this.state.MapLoc);
    }).catch((error) => {
      console.warn('city location - Not good man :(');
      this.setState({
       msg:true
      })
      alert("Oh snap! You got an error! Kindly enter a valid location.");
      this.render(<AlertDismissibleExample />);
      
      console.log(this.state.msg);


    })


    function AlertDismissibleExample() {
      const [show, setShow] = this.useState(true);
    
      if (show) {
        return (
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
            Kindly enter a valid location.
            </p>
          </Alert>
        );
      }
      return <Button onClick={() => setShow(true)}>Show Alert</Button>;
    }

  }
  // handleMap = (e) => {
  //   e.preventDefault();
  //   axios.get(`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}
  //   &center=${this.state.lat},${this.state.lon}&zoom=10`).then((res)=>{
  //     console.log('inside map- Everything is awesome.');
  //     let responseData = res.data[0]
  //     this.setState({
  //       city_name: responseData.display_name,
  //       lon: responseData.lon,
  //       lat: responseData.lat,
  //       zoom:13,
  //       showData: true,
  //       showModal: true

  //     })

  //   }).catch((error)=>{
  //     console.warn('inside map- Not good man :(');
  //   })

  // }

  render() {
    return (
      <>
        <h1>Welcome to City explorer</h1>
        <SearchForm handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} />
        {
          this.state.showData &&
          <Location handleClose={this.handleClose}
            showModal={this.state.showModal}
            city_name={this.state.city_name}
            MapLoc={this.state.MapLoc}
            lat={this.state.lat}
            lon={this.state.lon} />


        }
        
       
      </>
    )
  }
}


export default App
