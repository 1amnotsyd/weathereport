import React from "react";
import Info from "./components/info";
import Weather from "./components/Weather";
import Form from "./components/Form"

const API_KEY = "";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: undefined,
      city: undefined,
      country: undefined,
      pressure: undefined,
      sunrise: undefined,
      sunset: undefined,
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const cityName = e.target.city.value;

    if (cityName) {
      const RESPONSE = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
      const data = await RESPONSE.json();
      console.log(data);

      const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString()
      const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString()

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunrise: sunriseTime,
        sunset: sunsetTime,
      });
    } else {
      this.setState({
        city: undefined
      });
      alert("Введите название города")
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="row">
            <div className="col info">
              <Info />
            </div>
          </div>
          <div className="row">
            <div className="col form">
              <Form weather={this.getWeather} />
            </div>
          </div>
          <div className="row">
            <div className="col weather">
              <Weather {...this.state} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
