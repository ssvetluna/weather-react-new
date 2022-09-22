import React from "react";
import "./MainTemp.css";

export default function MainTemp(props) {
  return (
    <div className="Units">
      <span className="MainTemp">{Math.round(props.temp)}</span>
      <span>
        <a href="/" className="Celsius">
          °C |
        </a>
      </span>
      <span>
        <a href="/" className="Farengeit">
          °F
        </a>
      </span>
    </div>
  );
}
