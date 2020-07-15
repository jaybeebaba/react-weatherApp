import React, {Component} from 'react';
import Weather from "./components/weather"
import axios from "axios"
import Form from "./components/form"
const API_Key = "91ab5d0dba73dc5d51d9fbf09239ce07"


function calcCels(temp){
  let cell = Math.floor(temp-273.15)
  return cell
}

// var weatherIcons={
//   thunderstorm: "fa-moon" 
// }


class App extends Component{
state={
  city: null,
  country: null,
  icon: undefined,
  main: null,
  min: null,
  max: null,
  description: null
  
}
weatherIcons={
  thunderstorm: "fa-bolt",
  sun: "fa-sun",
  rain: "fa-cloud-showers-heavy",
  drizzle: "fa-cloud-sun-rain",
  snow: "fa-snowflake",
  cloud: "fa-cloud",
  atmosphere: "fa-smog"
}

getWeatherIcon(icon, rangeId){
  switch(true){
    case rangeId>=200 && rangeId<=232:
    this.setState({icon: this.weatherIcons.thunderstorm})
    break;
    case rangeId>=500 && rangeId<=531:
    this.setState({icon: this.weatherIcons.rain})
    break;
    case rangeId>=600 && rangeId<=622:
    this.setState({icon: this.weatherIcons.snow})
    break;
    case rangeId>=701 && rangeId<=781:
    this.setState({icon: this.weatherIcons.atmosphere})
    break;
    case rangeId=800:
    this.setState({icon: this.weatherIcons.sun})
    break;
    case rangeId>=801 && rangeId<=804:
    this.setState({icon: this.weatherIcons.cloud})
    break;
    case rangeId>=300 && rangeId<=321:
    this.setState({icon: this.weatherIcons.drizzle})
    break;
    default:
      this.setState({icon: this.weatherIcons.cloud})

  }
}


fetchData = (data) =>{
  console.log(data.city)
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.country}&APPID=${API_Key}`)
  .then(res=>{
    this.setState({
      city: res.data.name,
      country: res.data.sys.country,
      main: calcCels(res.data.main.temp),
      min: calcCels(res.data.main.temp_min),
      max: calcCels(res.data.main.temp_max),
      description: res.data.weather[0].description
      
      // icon: this.weatherIcons.snow
    })
    this.getWeatherIcon(this.weatherIcons, res.data.weather[0].id)
    
    console.log(res.data)
  })
}

 componentDidMount(){

  this.fetchData({city: "New York", country: "USA"})
 }


  

  render(){
    return(
      <div className="App">
        <Form fetchData={this.fetchData}/>
        <Weather 
          city={this.state.city} 
          country={this.state.country} 
          main={this.state.main} 
          min={this.state.min} 
          max={this.state.max}
          description={this.state.description}
          weathericons={this.state.icon}
          />
      
    </div>
    )
  }
}

export default App;
