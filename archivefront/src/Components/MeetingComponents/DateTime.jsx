// DateTime.js
import React, { useState, useEffect } from "react";
import "./date.css";

function DateTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    updateDate();
  }, []);

  const updateDate = () => {
    const today = new Date();

    const dayName = today.getDay();
    const dayNum = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dayWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const IDCollection = ["day", "daynum", "month", "year"];
    const val = [dayWeek[dayName], dayNum, months[month], year];

    IDCollection.forEach((id, index) => {
      const element = document.getElementById(id);
      if (element) {
        element.innerText = val[index];
      }
    });
  };

  return (
    <div className="dateTimeContainer">
      <div className="displayDate">
        <span id="day">day</span>,<span id="daynum">00</span>
        <span id="month">month</span>
        <span id="year">0000</span>
      </div>
      <div className="displayTime">
        {currentTime.toLocaleTimeString("en-US", { hour12: false })}
      </div>
    </div>
  );
}

export default DateTime;
