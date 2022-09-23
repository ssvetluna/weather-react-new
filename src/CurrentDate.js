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
  return (
    <div className="CurrentDate">
      {days[day]} {hours}:{minutes}
    </div>
  );
}
