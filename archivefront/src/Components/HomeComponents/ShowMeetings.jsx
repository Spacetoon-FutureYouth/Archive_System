import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../ADMIN/Data/style.css";

const ShowMeetings = ({ userId }) => {
  const [meetings, setMeetings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7103/api/Meeting/user/${userId}`
        );
        // Assuming response.data is structured as { $values: [...] }
        const meetingsData = response.data.$values || [];

        // Fetch creator usernames for each meeting
        const meetingsWithUsernames = await Promise.all(
          meetingsData.map(async (meeting) => {
            try {
              const creatorResponse = await axios.get(
                `https://localhost:7103/api/Admin/${meeting.creatorUserId}`
              );
              meeting.creatorUserName = creatorResponse.data.username;
              return meeting;
            } catch (error) {
              console.error(
                `Error fetching creator details for meeting ${meeting.meetingId}:`,
                error
              );
              return meeting; // Return meeting without creatorUserName if error
            }
          })
        );

        setMeetings(meetingsWithUsernames);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching meetings:", error);
        setIsLoading(false);
      }
    };

    fetchMeetings();
  }, [userId]);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString(); // Adjust this according to your date format preference
  };

  const handleDetailsClick = (meetingId) => {
    navigate(`/MeetingStatus/${meetingId}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (meetings.length === 0) {
    return (
      <h3
        style={{
          textAlign: "center",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        No meetings found.
      </h3>
    );
  }

  return (
    <div className="table-container-custom">
      <br />
      <br />
      <table className="container-custom">
        <thead>
          <tr>
            <th className="table-header-custom">
              <h1>Meeting Title</h1>
            </th>
            <th className="table-header-custom">
              <h1>Attendance Date</h1>
            </th>
            <th className="table-header-custom">
              <h1>Creator</h1>
            </th>
            <th className="table-header-custom">
              <h1>Actions</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting) => (
            <tr key={meeting.meetingId}>
              <td>{meeting.meetingTitle}</td>
              <td>{formatDate(meeting.attendanceDate)}</td>
              <td>{meeting.creatorUserName}</td>{" "}
              {/* Change to appropriate property */}
              <td>
                <button onClick={() => handleDetailsClick(meeting.meetingId)}>
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowMeetings;
