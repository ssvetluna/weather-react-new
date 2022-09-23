import React from "react";

import "./CurrentInfo.css";
import MainTemp from "./MainTemp";
import CurrentDate from "./CurrentDate";
import MainImage from "./MainImage";

export default function CurrentInfo(props) {
  return (
    <div className="row">
      <div className="col-md-4">
        <MainImage icon={props.city.icon} />
      </div>
      <div className="col">
        <MainTemp temp={props.city.temperature} alt="Weather description" />
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
