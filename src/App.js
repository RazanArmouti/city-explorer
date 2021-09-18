import React, { Component } from 'react'
import './App.css';
import Location from './components/Location';
import SearchForm from './components/SearchForm';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlertMsg from './components/AlertMsg';
import WeatherDay from './components/WeatherDay';


import Movies from './components/Movies';
import Restaurants from './components/Restaurants';


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
      moviedata: [],
      resturantdata: [],
      title: '',
      overview: '',
      average_votes: 0,
      total_votes: 0,
      image_url: '',
      popularity: 0,
      released_on: '',
      name:'',
      Res_image_url:'',
      price:'',
      rating:'',
      url:''

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

    }).catch((error) => {
      console.warn('error, talking with my server');
      this.setState({
        msg: true,
        ShowErrorAlert: true
      })

    }).then(() => {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`).then((serverResponse) => {
        console.log('inside the  weather.data' + serverResponse.data);
        serverResponse.data.length > 0 ? this.setState({
          weather: serverResponse.data
        }) : this.setState({
          weather: []
        })


      }).then(() => {
        let cityArr = [];
        cityArr = this.state.city_name.split(',');
        // let index = cityArr.length - 1;
        let cityName = cityArr[0].replace(/ /g, "");
        //console.log(cityArr);
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies?query=${cityName}`).then((serverRes) => {

          console.log('inside the  country.data' + serverRes.data);
          serverRes.data.length > 0 ? this.setState({
            moviedata: serverRes.data
          }) : this.setState({
            moviedata: []
          })


        }).then(() => {
          let cityArr = [];
          cityArr = this.state.city_name.split(',');
          // let index = cityArr.length - 1;
          let cityName = cityArr[0].replace(/ /g, "");
          axios.get(`${process.env.REACT_APP_BACKEND_URL}/yelp?location=${cityName}&lat=${this.state.lat}&lon=${this.state.lon}`).then((yelpres) => {
            console.log('inside the  yelp.data' + yelpres.data);
            yelpres.data.length > 0 ? this.setState({
              resturantdata: yelpres.data
            }) : this.setState({
              resturantdata: []
            })
            // this.state.resturantdata.forEach((y) => {
          
            //   console.log(y.name);
            // });

          })

        }).catch((error) => {
          console.warn('error, talking with my server');
          this.setState({
            msg: true,
            ShowErrorAlert: true
          })

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

        <SearchForm handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} />

        <br />
        {
          this.state.ShowErrorAlert && <AlertMsg />
        }

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

              < WeatherDay date={item.date}
                description={item.description}
                city_name={this.state.city_name}
              />

            </>
          })
        }


      
          
           {
           this.state.moviedata?< Movies moviedata={this.state.moviedata}  city_name={this.state.city_name}  />:''   
                       
           }
       
        


          {
              this.state.resturantdata?< Restaurants resturantdata={this.state.resturantdata} />:''
          }
              

           


      </>
    )
  }
}


export default App
