import React, { useState, useEffect } from "react";
import "./date.css";

function DateTime({ meetingTime }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    updateDate();
    return () => clearInterval(timer);
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

  const formatTime = (time) => {
    return time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  return (
    <div className="dateTimeContainer">
      <div className="displayDate">
        <span id="day">
          {meetingTime
            ? new Date(meetingTime).toLocaleDateString("en-US", {
                weekday: "long",
              })
            : "day"}
        </span>
        ,{" "}
        <span id="daynum">
          {meetingTime ? new Date(meetingTime).getDate() : "00"}
        </span>{" "}
        <span id="month">
          {meetingTime
            ? new Date(meetingTime).toLocaleDateString("en-US", {
                month: "long",
              })
            : "month"}
        </span>{" "}
        <span id="year">
          {meetingTime ? new Date(meetingTime).getFullYear() : "0000"}
        </span>
      </div>
      <div className="displayTime">
        {meetingTime
          ? formatTime(new Date(meetingTime))
          : formatTime(currentTime)}
      </div>
    </div>
  );
}

export default DateTime;
