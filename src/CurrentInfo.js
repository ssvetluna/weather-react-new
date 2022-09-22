import React from "react";
import { useState } from "react";
import axios from "axios";

import "./CurrentInfo.css";
import MainEmoji from "./MainEmoji";
import MainTemp from "./MainTemp";
import CurrentDate from "./CurrentDate";

export default function CurrentInfo(props) {
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [temp, setTemp] = useState("");
  function handleResponse(response) {
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setTemp(response.data.main.temp);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=2f7f11cce544f115af9a2c80b2a612b4`;
  axios.get(url).then(handleResponse);
  return (
    <div className="row">
      <div className="col">
        <MainEmoji city={props.city} />
      </div>
      <div className="col">
        <MainTemp temp={temp} />
      </div>
      <div className="col">
        <div className="Current">
          <div id="Updated">Last Updated:</div>
          <CurrentDate />
          <div className="CurrentHum">Humidity: {humidity}%</div>
          <div className="CurrentWind">Wind: {wind} km/h</div>
        </div>
      </div>
    </div>
  );
}
