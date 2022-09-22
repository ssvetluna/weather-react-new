import React from "react";
import { useState } from "react";

import "./MainTemp.css";

export default function MainTemp(props) {
  let [count, setCount] = useState(1);
  function handleClickCelsius(event) {
    event.preventDefault();
    setCount(1);
  }
  function handleClickFarengeit(event) {
    event.preventDefault();
    setCount(2);
  }
  if (count === 1) {
    return (
      <div className="Units">
        <span className="MainTemp">{Math.round(props.temp)}</span>
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
  } else {
    return (
      <div className="Units">
        <span className="MainTemp">
          {Math.round((props.temp * 9) / 5 + 32)}
        </span>
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
}
