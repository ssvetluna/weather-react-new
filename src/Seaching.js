import React from "react";
import { useState } from "react";
import axios from "axios";

import "./Seaching.css";
import CurrentInfo from "./CurrentInfo";
import Forecast from "./Forecast";
import ForecastDays from "./ForecastDays";

export default function Seaching() {
  let [city, setCity] = useState("Kyiv");
  let [weatherData, setWeatherData] = useState({ ready: false });

  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_DAY",
    "02d": "CLEAR_DAY",
    "02n": "CLEAR_DAY",
    "03d": "CLEAR_DAY",
    "03n": "CLEAR_DAY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "RAIN",
    "13n": "RAIN",
    "50d": "RAIN",
    "50n": "RAIN",
  };

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    });
  }

  function seach(props) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props}&units=metric&appid=6643c7326a4c2a38838264a28531d97e`;
    axios.get(url).then(handleResponse);
  }
  function handleClick(event) {
    event.preventDefault();
    seach(city);
  }
  function handleChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <div className={codeMapping[weatherData.icon]} id="Maincard">
              <div className="Seaching">
                <div className="City">{weatherData.city}</div>
                <form className="seaching">
                  <div className="input-group">
                    <input
                      type="seaching"
                      className="form-control"
                      placeholder="Enter a city"
                      id="citySeaching"
                      autoComplete="off"
                      autoFocus="off"
                      onChange={handleChange}
                    />
                    <button
                      type="submit"
                      className="btn btn-outline-secondary"
                      id="btn-seach"
                      onClick={handleClick}
                    >
                      Seach
                    </button>
                  </div>
                </form>
                <br />
                <br />
                <CurrentInfo city={weatherData} />
              </div>
              <h3>Nearest Forecast</h3>
              <hr className="hr" />
              <br />
              <Forecast coords={weatherData} />
              <br />
              <br />

              <div>
                <a
                  href="https://github.com/ssvetluna/weather-react-new"
                  target="_blank"
                  rel="noreferrer"
                  id="source"
                >
                  Open-source code
                </a>
                <span> by Stepanenko Svitlana</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="Card" id="Forecastcard">
              <h2>Daily Forecast</h2>
            </div>
            <ForecastDays coords={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    seach(city);
    return "Loading..";
  }
}
