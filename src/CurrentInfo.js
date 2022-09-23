import React from "react";
import { useState } from "react";
import axios from "axios";

import "./CurrentInfo.css";
import MainTemp from "./MainTemp";
import CurrentDate from "./CurrentDate";

export default function CurrentInfo(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }
  let imageUrl = `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;
  if (weatherData.ready) {
    return (
      <div className="row">
        <div className="col">
          <img src={imageUrl} alt="icon" />
        </div>
        <div className="col">
          <MainTemp temp={weatherData.temperature} />
        </div>
        <div className="col">
          <div className="Current">
            <div id="Updated">Last Updated:</div>
            <CurrentDate date={weatherData.date} />
            <div className="CurrentHum">Humidity: {weatherData.humidity}%</div>
            <div className="CurrentWind">Wind: {weatherData.wind} km/h</div>
          </div>
        </div>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=2f7f11cce544f115af9a2c80b2a612b4`;
    axios.get(url).then(handleResponse);
    return "Loading..";
  }
}
