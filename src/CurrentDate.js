import React from "react";

export default function CurrentDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thuesday",
    "Friday",
    "Saturday",
  ];
  let day = props.date.getDay();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    return (
      <div className="CurrentDate">
        {days[day]} {hours}:0{minutes}
      </div>
    );
  } else {
    return (
      <div className="CurrentDate">
        {days[day]} {hours}:{minutes}
      </div>
    );
  }
}
