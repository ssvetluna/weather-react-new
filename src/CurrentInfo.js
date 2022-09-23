import React from "react";

import "./CurrentInfo.css";
import MainTemp from "./MainTemp";
import CurrentDate from "./CurrentDate";

export default function CurrentInfo(props) {
  let imageUrl = `http://openweathermap.org/img/wn/${props.city.icon}@2x.png`;
  return (
    <div className="row">
      <div className="col-md-4">
        <img src={imageUrl} alt="WeatherDescription" width="150" />
      </div>
      <div className="col">
        <MainTemp temp={props.city.temperature} />
      </div>
      <div className="col">
        <div className="Current">
          <div id="Updated">Last Updated:</div>
          <CurrentDate date={props.city.date} />
          <div className="CurrentHum">Humidity: {props.city.humidity}%</div>
          <div className="CurrentWind">Wind: {props.city.wind} km/h</div>
        </div>
      </div>
    </div>
  );
}
