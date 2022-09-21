import React from "react";

import axios from "axios";
import { useState } from "react";

export default function CurrentHum() {
  let [humidity, setHumidity] = useState("");
  function handleResponse(response) {
    setHumidity(response.data.main.humidity);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&appid=2f7f11cce544f115af9a2c80b2a612b4`;
  axios.get(url).then(handleResponse);
  return <div className="CurrentHum">Humidity: {humidity}%</div>;
}