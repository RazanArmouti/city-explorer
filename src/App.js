import React, { Component } from 'react'
import './App.css';
import Location from './components/Location';
import SearchForm from './components/SearchForm';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city_name: "",
    
      lat: "",
      lon: "",
      showData: false,
      showModal: false
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
      axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city_name}&format=json`).then((response) => {
        console.log('Everything is awesome.');
        let responseData = response.data[0]
        this.setState({
          city_name: responseData.display_name,
          lon: responseData.lon,
          lat: responseData.lat,
          
          showData: true,
          showModal: true

        })
      }).catch((error) => {
        console.warn('Not good man :(');
      })

    }

    render(){
      return (
        <div>
          <h1>Welcome to City explorer</h1>
          <SearchForm handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} />
          {
            this.state.showData &&
            <Location handleClose={this.handleClose} 
                      showModal={this.state.showModal} 
                      city_name={this.state.city_name}
                      
                      lat={this.state.lat}
                      lon={this.state.lon}/>
          }

        </div>
      )
    }
  }


export default App
