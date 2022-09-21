import React from "react";

import "./Units.css";

export default function Units() {
  return (
    <span className="Units">
      <a href="/" className="Celsius">
        °C
      </a>
      |
      <a href="/" className="Farengeit">
        °F
      </a>
    </span>
  );
}
