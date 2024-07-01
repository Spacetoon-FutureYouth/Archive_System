import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AppointmentRequestForm.css"; // Import the CSS file

const EditMeeting = ({ userId }) => {
  const [meetingTitle, setMeetingTitle] = useState("");
  const [attendanceDate, setAttendanceDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [creator, setCreator] = useState(null);
  const [usersList, setUsersList] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(""); // Store selected user ID
  const [invitedUsers, setInvitedUsers] = useState([]);

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

    const fetchUsersList = async () => {
      try {
        const response = await axios.get("https://localhost:7103/api/Admin");
        console.log("Users list response:", response.data); // Check response data
        setUsersList(response.data.$values); // Assuming response structure $values contains user list
      } catch (error) {
        console.error("Error fetching users list:", error);
      }
    };

    fetchCreatorData();
    fetchUsersList();
  }, [userId]);

  const handleAddUser = () => {
    // Find the selected user from usersList using selectedUserId
    const selectedUser = usersList.find(
      (user) => user.userId === selectedUserId
    );

    if (selectedUser) {
      // Check if the user is already invited
      if (!invitedUsers.some((user) => user.userId === selectedUser.userId)) {
        setInvitedUsers([...invitedUsers, selectedUser]);
      }
    }
  };

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

      {/* User Dropdown */}
      <div className="user-dropdown">
        <select
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
        >
          <option value="">Select User</option>
          {usersList.map((user) => (
            <option key={user.userId} value={user.userId}>
              {user.username}
            </option>
          ))}
        </select>
        <button type="button" onClick={handleAddUser}>
          Add
        </button>
      </div>

      {/* Invited Users List */}
      <div className="invited-users">
        <h3>Invited Users:</h3>
        <ul>
          {invitedUsers.map((user) => (
            <li key={user.userId}>{user.username}</li>
          ))}
        </ul>
      </div>

      <button type="submit" disabled={!creator}>
        Create Meeting
      </button>
    </form>
  );
};

export default EditMeeting;
