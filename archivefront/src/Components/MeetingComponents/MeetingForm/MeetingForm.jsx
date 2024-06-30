import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AppointmentRequestForm.css"; // Import the CSS file

const AppointmentRequestForm = ({ userId }) => {
  const [meetingTitle, setMeetingTitle] = useState("");
  const [attendanceDate, setAttendanceDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreatorData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7103/api/Admin/${userId}`
        );
        const data = response.data;
        const creatorData = {
          image: data.image,
          email: data.email,
          password: data.password,
          confirmPassword: data.password, // assuming the same password for confirmPassword
          userName: data.username,
          gender: data.gender,
          phoneNumber: data.phoneNumber,
        };
        setCreator(creatorData);
      } catch (error) {
        console.error("Error fetching creator data:", error);
      }
    };

    fetchCreatorData();
  }, [userId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!creator) {
      console.error("Creator data not loaded yet.");
      return;
    }

    const meetingAttendances = [
      {
        userId: userId,
        user: creator,
      },
    ];

    const invitedUsers = [
      {
        userId: "1f908bde-5dce-403d-899d-7a49f4ba1bdb",
        username: "7065f75d9b@boxmail.lol",
        email: "khietgiauco@gmail.com",
        image: "638552918202035679.jpeg",
        gender: "Male",
        phoneNumber: "010666",
      },
      {
        userId: "21489f20-c254-4cb0-b14c-892dc8d808df",
        username: "Lana",
        email: "Jihad.20377391@compit.aun.edu.eg",
        image: "638552598196639767.jpeg",
        gender: "Male",
        phoneNumber: "01016384816",
      },
    ];

    const newMeeting = {
      meetingTitle,
      attendanceDate,
      location,
      description,
      creatorUserId: userId,
      creator,
      meetingAttendances,
      invitedUsers,
    };

    try {
      const response = await axios.post(
        "https://localhost:7103/api/Meeting",
        newMeeting
      );
      console.log("Meeting created:", response.data);
    } catch (error) {
      console.error("Error creating meeting:", error);
    }
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <label>
        Meeting Title:
        <input
          type="text"
          value={meetingTitle}
          onChange={(e) => setMeetingTitle(e.target.value)}
        />
      </label>
      <label>
        Attendance Date:
        <input
          type="datetime-local"
          value={attendanceDate}
          onChange={(e) => setAttendanceDate(e.target.value)}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit" disabled={!creator}>
        Create Meeting
      </button>
    </form>
  );
};

export default AppointmentRequestForm;
