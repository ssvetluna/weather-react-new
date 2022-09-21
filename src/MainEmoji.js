import React from "react";
import { useState } from "react";
import "./MainEmoji.css";
import axios from "axios";

export default function MainEmoji() {
  let [image, setImage] = useState("");
  function handleResponse(response) {
    setImage(response.data.weather[0].icon);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&appid=2f7f11cce544f115af9a2c80b2a612b4`;
  axios.get(url).then(handleResponse);

  let imageUrl = `http://openweathermap.org/img/wn/${image}@2x.png`;
  return <img src={imageUrl} alt="icon" />;
}
