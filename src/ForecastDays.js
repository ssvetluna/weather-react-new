import React from "react";
import MainImage from "./MainImage";
import axios from "axios";
import "./ForecastDays.css";

export default function ForecastDays() {
  let lon = -94.04;
  let lat = 33.44;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=2f7f11cce544f115af9a2c80b2a612b4`;

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
