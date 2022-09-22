import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

import City from "./City";
import Seaching from "./Seaching";
import CurrentInfo from "./CurrentInfo";
import Forecast from "./Forecast";
import ForecastDaily from "./ForecastDaily";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="Container">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-7">
          <div className="Card" id="Maincard">
            <City />
            <Seaching />
            <br />
            <br />
            <CurrentInfo />
            <h3>Nearest Forecast</h3>
            <hr className="hr" />
            <Forecast />
            <br />
            <br />
            <br />
            <div>
              <a
                href="https://github.com/ssvetluna/weather-react-new"
                target="_blank"
                rel="noreferrer"
                id="source"
              >
                Open-source code
              </a>
              <span> by Stepanenko Svitlana</span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <ForecastDaily />
        </div>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
