import React from "react";

import "./MainTemp.css";

export default function MainTemp(props) {
  return (
    <div className="Units">
      <span className="MainTemp">{Math.round(props.temp)}</span>
      <span className="Celsius">°C</span>
    </div>
  );
}
