import React from "react";

import "./Seaching.css";

export default function Seaching() {
  return (
    <form className="seaching">
      <div className="input-group">
        <input
          type="search"
          className="form-control"
          placeholder="Enter a city"
          id="citySeaching"
          autocomplete="off"
        />
        <input
          type="submit"
          className="btn btn-outline-secondary"
          value="Search"
          id="btn-seach"
        />

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
