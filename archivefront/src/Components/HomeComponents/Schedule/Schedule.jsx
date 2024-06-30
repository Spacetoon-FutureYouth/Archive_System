import React, { useEffect, useState } from "react";
import ScheduleItem from "./ScheduleItem";
import axios from "axios";

const Schedule = ({ userId }) => {
  // Receive userId as a prop
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    fetchUserMeetings();
  }, []);

  const fetchUserMeetings = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7103/api/Meeting/usermeetings/${userId}`
      );
      console.log("API Response:", response.data); // Log the API response to inspect its structure

      // Check if response.data.$values is an array
      if (Array.isArray(response.data.$values)) {
        setMeetings(response.data.$values); // Update state with the array of meetings
      } else {
        console.error("Unexpected API response:", response.data);
      }
    } catch (error) {
      console.error("Error fetching meetings:", error);
    }
  };

  const handleAttendClick = async (meetingId) => {
    try {
      const response = await axios.post(
        `https://localhost:7103/api/Meeting/attend`,
        {
          meetingId: meetingId,
          userId: userId,
        }
      );
      console.log("Attend API Response:", response.data); // Log the API response after attending

      // Filter out the attended meeting from the state
      const updatedMeetings = meetings.filter(
        (meeting) => meeting.meetingId !== meetingId
      );
      setMeetings(updatedMeetings);
    } catch (error) {
      console.error("Error attending meeting:", error);
    }
  };

  return (
    <section className="schedule">
      <div className="container">
        <div className="schedule-inner">
          <div className="row">
            {meetings.map((meeting) => (
              <ScheduleItem
                key={meeting.meetingId} // Assuming meetingId is unique
                iconClass="icofont-ui-clock"
                spanText=""
                title={meeting.meetingTitle}
                description={meeting.description}
              >
                <ul className="time-sidual">
                  <li className="day">
                    {meeting.attendanceDate && (
                      <>
                        Date:{" "}
                        <span>
                          {new Date(meeting.attendanceDate).toLocaleString()}
                        </span>
                      </>
                    )}
                  </li>
                  <li className="day">
                    Location: <span>{meeting.location}</span>
                  </li>
                </ul>
                <a
                  href="#"
                  onClick={() => handleAttendClick(meeting.meetingId)}
                >
                  Attend<i className="fa fa-long-arrow-right"></i>
                </a>
              </ScheduleItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
