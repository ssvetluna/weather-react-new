import React from "react";
import { useState } from "react";

import "./MainTemp.css";

export default function MainTemp(props) {
  let [temp, setTemp] = useState(`${Math.round(props.temp)}`);
  function handleClickCelsius(event) {
    event.preventDefault();
    setTemp(Math.round(props.temp));
  }
  function handleClickFarengeit(event) {
    event.preventDefault();
    setTemp(Math.round((props.temp * 9) / 5 + 32));
  }

  return (
    <div className="Units">
      <span className="MainTemp">{temp}</span>
      <span>
        <a href="/" className="Celsius" onClick={handleClickCelsius}>
          °C |
        </a>
      </span>
      <span>
        <a href="/" className="Farengeit" onClick={handleClickFarengeit}>
          °F
        </a>
      </span>
    </div>
  );
}
