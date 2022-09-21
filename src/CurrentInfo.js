import React from "react";

import "./CurrentInfo.css";
import MainEmoji from "./MainEmoji";
import MainTemp from "./MainTemp";
import CurrentDate from "./CurrentDate";
import CurrentHum from "./CurrentHum";
import CurrentWind from "./CurrentWind";

export default function CurrentInfo() {
  return (
    <div className="row">
      <div className="col">
        <MainEmoji />
      </div>
      <div className="col">
        <MainTemp />
      </div>
      <div className="col">
        <div className="Current">
          <div id="Updated">Last Updated:</div>
          <CurrentDate />
          <CurrentHum />
          <CurrentWind />
        </div>
      </div>
    </div>
  );
}
