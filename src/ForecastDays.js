import React from "react";
import MainImage from "./MainImage";
import { useState, useEffect } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";

import "./ForecastDays.css";

export default function ForecastDays(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_DAY",
    "02d": "CLEAR_DAY",
    "02n": "CLEAR_DAY",
    "03d": "CLEAR_DAY",
    "03n": "CLEAR_DAY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "RAIN",
    "13n": "RAIN",
    "50d": "RAIN",
    "50n": "RAIN",
  };

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  if (loaded) {
    return (
      <div className="ForecastDays">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col-12" key={index}>
                  <div
                    className={codeMapping[dailyForecast.weather[0].icon]}
                    id="Forecastbase"
                  >
                    <span className="ForecastDaysDate">
                      <CurrentDate
                        date={new Date(dailyForecast.dt * 1000)}
                        style="forecastDays"
                      />
                    </span>
                    <span className="ForecastDaysImage">
                      <MainImage
                        icon={dailyForecast.weather[0].icon}
                        size={40}
                        animate="true"
                      />
                    </span>
                    <span className="ForecastDaysTempMax">
                      {Math.round(dailyForecast.temp.max)}°{" "}
                    </span>
                    <span className="ForecastDaysTempMin">
                      {Math.round(dailyForecast.temp.min)}°
                    </span>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&appid=6643c7326a4c2a38838264a28531d97e&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
