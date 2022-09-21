import React from "react";

import "./ForecastDaily.css";

export default function ForecastDaily() {
  return (
    <div className="ForecastDaily">
      <div className="Card" id="Forecastcard">
        <h2>Daily Forecast</h2>
      </div>
      <div className="Forecastdays" id="Forecastdays"></div>
    </div>
  );
}
