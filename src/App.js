import React, { Component } from 'react'
import './App.css';
import Location from './components/Location';
import SearchForm from './components/SearchForm';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlertMsg from './components/AlertMsg';
import Weather from './components/Weather';
import Movie from './components/Movie';


class App extends Component {
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
      msg: false,
      date: "",
      description: "",
      ShowErrorAlert: false,
      weather: [],
      movie:[],
      title:'',
      overview:'',
      average_votes:0,
      total_votes:0,
      image_url:'',
      popularity:0,
      released_on:''

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
        msg: false


      })
     
    }).then(() => {
     
      axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`).then((serverResponse => {
        console.log('inside the  weather.data');
        console.log(serverResponse.data);
        this.setState({ weather: serverResponse.data })
     

      })).then(() => {
        let cityArr = [];
        cityArr = this.state.city_name.split(',');
        let index=cityArr.length-1;
        let country=cityArr[index].replace(/ /g, "");
        console.log(cityArr);
        axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/movies?country=${country}`).then((serverRes => {
          console.log('inside the  country.data');
          console.log(serverRes.data);
          this.setState({ movie: serverRes.data })
       
  
        })).catch((error) => {
        console.warn('error, talking with my server');

      })

    }).catch((error) => {
      console.warn('city location - Not good man :(');
      this.setState({
        msg: true,
        ShowErrorAlert: true
      })


    })

   })
  }
   

  render() {
    return (
      <>
        <h1>Welcome to City explorer</h1>
        <br />
        {
          this.state.ShowErrorAlert && <AlertMsg />
        }
        <SearchForm handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} />

        {
          this.state.showData &&
          <Location handleClose={this.handleClose}
            showModal={this.state.showModal}
            city_name={this.state.city_name}
            MapLoc={this.state.MapLoc}
            lat={this.state.lat}
            lon={this.state.lon}
            date={this.state.date}
            description={this.state.description} />


        }
        {
          this.state.weather.map(item => {
            return <>

              < Weather date={item.date}
                description={item.description}
                city_name={this.state.city_name}
              />

            </>
          })
        }

{
          this.state.movie.map(e => {
            return <>

              < Movie city_name={this.state.city_name}
               title={e.title}
               overview={e.overview}
               average_votes={e.average_votes}
               total_votes={e.total_votes}
               image_url={e.image_url}
               popularity={e.popularity}
               released_on={e.released_on}
              />

            </>
          })
        }


      </>
    )
  }
}


export default App
