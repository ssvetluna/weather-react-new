import React from "react";
import "./MainEmoji.css";
import axios from "axios";
import { useState } from "react";

export default function MainEmoji(props) {
  let [ready, setReady] = useState(false);
  let [image, setImage] = useState("");
  function handleResponse(response) {
    setImage(response.data.weather[0].icon);
    setReady(true);
  }

  if (ready) {
    let imageUrl = `http://openweathermap.org/img/wn/${image}@2x.png`;
    return <img src={imageUrl} alt="icon" />;
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=2f7f11cce544f115af9a2c80b2a612b4`;

    axios.get(url).then(handleResponse);
    return "Loading..";
  }
}
