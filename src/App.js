import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  let [city, setCity] = useState("fff");
  function handleResponse(response) {
    setCity(response.data.main.temp);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&appid=2f7f11cce544f115af9a2c80b2a612b4`;
  axios.get(url).then(handleResponse);
  return (
    <div className="App">
      <header className="App-header">
        <p>{city}</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Links
        </a>
      </header>
    </div>
  );
}

export default App;
