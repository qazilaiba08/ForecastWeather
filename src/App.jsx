import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import { FaWind, FaTint, FaCloudRain } from "react-icons/fa";
import "./components/Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLocationPin } from "react-icons/fa6";
import Footer from './components/Footer'
import Navbar1 from './components/Navbar1';
// import About from "./Pages/About";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const cityInput = useRef(); // useRef for the input field

  // Function to fetch weather data based on city
  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=3d89dac70d43451ba9b202407251401&q=${city}&days=7`
      );
      setWeather(response.data);
      setForecast(response.data.forecast.forecastday);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Fetch initial weather data for Berlin
  useEffect(() => {
    fetchWeather("Berlin");
  }, []);

  // Handle form submission and input field change
  const handleSearch = (e) => {
    e.preventDefault();
    const city = cityInput.current.value;
    fetchWeather(city);
  };

  if (!weather) {
    return <p>Loading weather data...</p>;
  }

  const { temp_c, condition, wind_kph, humidity, precip_mm} = weather.current;

  // Determine weather class for background
  const weatherClass = condition.text.toLowerCase().includes("sun")
    ? "sunny"
    : condition.text.toLowerCase().includes("cloud")
    ? "cloudy"
    : condition.text.toLowerCase().includes("rain")
    ? "rainy"
    : "";

  return (
    <div className={`weather-app ${weatherClass}`}>
      {/* Animated Background */}
      <div className="sun"></div>
      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>
      <Navbar1 />
      {/* Weather Search Input */}
      <form className="search-form" onSubmit={handleSearch}>
        <input
          ref={cityInput}
          type="text"
          placeholder="Enter your city name"
          className="search-input"
        />
        <button type="submit" className="search-btn">Search</button>
      </form>

      {/* Weather Display */}
      <div className="container mt-5">
       
        {/* Today's Weather Card with Sun Background */}
        <Card className="weather-today-card text-center p-4 mb-4">
          <div className="sun-background"></div>
          <h1 className="temp">Temperature {temp_c}°</h1>
          
          <h4 className="condition">{condition.text}</h4>
          <img
            src={`https:${condition.icon}`}
            alt={condition.text}
            className="condition-icon"
          />
          <h2>
            <FaLocationPin className="icon" />
              {weather.location.name}, {weather.location.country}
              </h2>
          <Row className="mt-4">
            <Col>
              <FaWind className="icon" />
              <p><h4>Wind:
              {wind_kph} km/h
              </h4></p>
            </Col>
            <Col>
              <FaTint className="icon" />
              <p><h4>Humidity:{humidity}%</h4></p>
            </Col>
            <Col>
              <FaCloudRain className="icon" />
              <p><h4>Precip:{precip_mm} mm</h4></p>
            </Col>
          </Row>
        </Card>
<br />
<br />
<center><hr width ="60%"/></center>
<br />
<br />
<center><h3 style={{alignItems:'center',justifyContent:'center'}}>Weekly Forecast</h3></center>
<br />
<center><hr width ="20%"/></center>
        {/* Forecast for the Next 7 Days */}
        <Row>
        
          {forecast.map((day, index) => {
            const { date, day: dayData } = day;
            const { maxtemp_c, mintemp_c, condition } = dayData;

            return (
              <Col key={index} md={4} lg={3} className="mb-3">
                
                <Card className="forecast-card p-3 text-center">
                  <h5 className="date">Date:{date}</h5>
                  <img
                    src={`https:${condition.icon}`}
                    alt={condition.text}
                    className="condition-icon"
                  />
                  <p>{condition.text}</p>
                  <p>Temperature :
                    <span className="max-temp">{maxtemp_c}°</span> /
                    <span className="min-temp">{mintemp_c}°</span>
                  </p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
      <br />
      {/* <About /> */}
      <br />
      <Footer />
    </div>
  );
};

export default Weather;
