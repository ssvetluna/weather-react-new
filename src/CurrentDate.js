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
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = props.date.getMonth();
  let day = props.date.getDay();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  let date = props.date.getDate();

  if (props.style === "current") {
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
  } else {
    if (props.style === "forecastDays") {
      return (
        <span className="CurrentDate">
          {days[day]} {months[month]} {date}
        </span>
      );
    } else {
      if (minutes < 10) {
        return (
          <div className="CurrentDate">
            {hours}:0{minutes}
          </div>
        );
      } else {
        return (
          <div className="CurrentDate">
            {hours}:{minutes}
          </div>
        );
      }
    }
  }
}
