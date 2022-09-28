import React from "react";
import MainImage from "./MainImage";
import axios from "axios";
import "./ForecastDays.css";

export default function ForecastDays(props) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&exclude=hourly&appid=2f7f11cce544f115af9a2c80b2a612b4&units=metric`;

  function handleResponse(response) {
    console.log(response);
  }

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="ForecastDays">
      <div className="Card" id="Forecastbase">
        <span className="ForecastDaysDate">Wednesday Sep 28</span>
        <span className="ForecastDaysImage">
          <MainImage icon="03n" size={40} />
        </span>
        <span className="ForecastDaysTempMax">17° </span>
        <span className="ForecastDaysTempMin">10°</span>
      </div>
    </div>
  );
}
