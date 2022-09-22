import React from "react";
import { useState } from "react";

import "./Seaching.css";

export default function Seaching() {
  let [city, setCity] = useState("Kyiv");
  let [cityUpdate, setCityUpdate] = useState("Kyiv");
  function handleClick(event) {
    event.preventDefault();
    setCityUpdate(city);
  }
  function handleChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div>
      <div className="City">{cityUpdate}</div>
      <form className="seaching">
        <div className="input-group">
          <input
            type="seaching"
            className="form-control"
            placeholder="Enter a city"
            id="citySeaching"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="btn btn-outline-secondary"
            id="btn-seach"
            onClick={handleClick}
          >
            Seach
          </button>

          <button
            type="button"
            className="btn btn-outline-secondary"
            id="current"
          >
            Current
          </button>
        </div>
      </form>
    </div>
  );
}
