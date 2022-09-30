import React from "react";
import MainImage from "./MainImage";
import { useState, useEffect } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.hourly);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (hourlyForecast, index) {
            if (index < 7 && index > 0) {
              return (
                <div className="col-2 p-1" key={index}>
                  <div className="ForecastDate">
                    <CurrentDate
                      date={new Date(hourlyForecast.dt * 1000)}
                      description="forecast"
                    />
                  </div>
                  <div className="ForecastImage">
                    <MainImage
                      icon={hourlyForecast.weather[0].icon}
                      size={40}
                      animate={false}
                    />
                  </div>
                  <div className="ForecastTemp">
                    {Math.round(hourlyForecast.temp)}°{" "}
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
