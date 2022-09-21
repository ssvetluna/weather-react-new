import React from "react";

import "./Seaching.css";

export default function Seaching() {
  function handleClick(event) {
    event.preventDefault();
  }
  function handleChange(event) {
    event.preventDefault();
  }
  return (
    <form className="seaching" onClick={handleClick}>
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
  );
}
