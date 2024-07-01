import React, { useEffect, useState } from "react";
import ScheduleItem from "./ScheduleItem";
import axios from "axios";

const Schedule = ({ userId }) => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    fetchUserMeetings();
  }, []);

  const fetchUserMeetings = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7103/api/Meeting/user/${userId}`
      );

      // Assuming response.data is structured as { $values: [...] }
      if (Array.isArray(response.data.$values)) {
        const filteredMeetings = response.data.$values.filter(
          (meeting) =>
            meeting.creatorUserId !== userId && // Exclude meetings where creatorUserId matches userId
            !meeting.meetingAttendances.$values.some(
              (attendance) =>
                attendance.userId === userId && attendance.isAttended
            )
        );
        setMeetings(filteredMeetings);
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
      console.log("Attend API Response:", response.data);

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
                key={meeting.meetingId}
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
                  <li className="day">
                    <br />
                  </li>

                  <li className="day">
                    Creator User Name: <span>{meeting.creatorUserName}</span>
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
