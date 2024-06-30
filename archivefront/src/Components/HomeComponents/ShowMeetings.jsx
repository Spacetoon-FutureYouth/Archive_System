import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../ADMIN/Data/style.css";

const ShowMeetings = () => {
  const [meetings, setMeetings] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading indicator
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await axios.get("https://localhost:7103/api/Meeting");
        setMeetings(response.data.$values);
        setIsLoading(false); // Turn off loading indicator
      } catch (error) {
        console.error("Error fetching meetings:", error);
        setIsLoading(false); // Turn off loading indicator on error
      }
    };

    fetchMeetings();
  }, []);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString(); // Adjust this according to your date format preference
  };

  const handleDetailsClick = (meetingId) => {
    navigate(`/MeetingStatus/${meetingId}`);
  };

  const handleEditClick = (meetingId) => {
    navigate(`/EditMeeting/${meetingId}`);
  };

  const handleDeleteClick = async (meetingId) => {
    try {
      await axios.delete(`https://localhost:7103/api/Meetings/${meetingId}`);
      setMeetings(
        meetings.filter((meeting) => meeting.meetingId !== meetingId)
      );
      console.log(`Successfully deleted meeting with ID: ${meetingId}`);
    } catch (error) {
      console.error(`Error deleting meeting with ID: ${meetingId}`, error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // Placeholder for loading state
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
              <td>{meeting.creator?.userName || "N/A"}</td>
              <td>
                <button onClick={() => handleDetailsClick(meeting.meetingId)}>
                  Details
                </button>
                <button onClick={() => handleEditClick(meeting.meetingId)}>
                  Edit
                </button>
                <button onClick={() => handleDeleteClick(meeting.meetingId)}>
                  Delete
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
