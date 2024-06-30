import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"; // Import the CSS file
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom

function EditMeeting() {
  const { meetingId } = useParams(); // Use useParams to get meetingId from route params

  const [formData, setFormData] = useState({
    MeetingTitle: "",
    AttendanceDate: "",
    Description: "",
    CreatorUserId: "", // Assuming this is the creator's identifier
    Recipient: "", // Single recipient
    Location: "", // New attribute for Location
  });

  const [users, setUsers] = useState([]);
  const [selectedRecipients, setSelectedRecipients] = useState([]);
  const [showRecipients, setShowRecipients] = useState(false);

  useEffect(() => {
    async function fetchMeetingDetails() {
      try {
        const response = await axios.get(
          `https://localhost:7103/api/Meeting/${meetingId}`
        );

        const {
          meetingTitle,
          attendanceDate,
          description,
          creatorUserId,
          invitedUsers,
          location, // Include location in destructuring
        } = response.data;

        setFormData({
          MeetingTitle: meetingTitle,
          AttendanceDate: new Date(attendanceDate).toISOString().split("T")[0], // format to 'yyyy-MM-dd'
          Description: description,
          CreatorUserId: creatorUserId,
          Recipient: "", // Assuming no initial recipient is selected
          Location: location || "", // Set Location or default to empty string
        });

        // Example of fetching users for the dropdown
        const usersResponse = await axios.get(
          "https://localhost:7103/api/Admin"
        );
        if (usersResponse.data && Array.isArray(usersResponse.data.$values)) {
          const usersData = usersResponse.data.$values.map((user) => ({
            value: user.userId,
            label: user.username,
          }));
          setUsers(usersData); // Assuming response.data.$values contains an array of users
        } else {
          console.error(
            "Invalid response format for users:",
            usersResponse.data
          );
        }

        // Example of populating selected recipients from invitedUsers
        if (Array.isArray(invitedUsers)) {
          const selectedRecipientsData = invitedUsers.map((invitation) => ({
            value: invitation.userId,
            label: invitation.user.userName, // Adjust to display user's name or relevant details
          }));
          setSelectedRecipients(selectedRecipientsData);
        }
      } catch (error) {
        console.error("Error fetching meeting details:", error);
      }
    }

    if (meetingId) {
      fetchMeetingDetails();
    }
  }, [meetingId]); // Fetch meeting details when meetingId changes

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Ensure required fields are populated
      if (!formData.Location) {
        throw new Error("Location is required.");
      }

      if (!formData.CreatorUserId) {
        throw new Error("Creator information is required.");
      }

      if (
        !formData.MeetingAttendances ||
        formData.MeetingAttendances.length === 0
      ) {
        throw new Error("Meeting Attendances are required.");
      }

      // Make sure InvitedUsers is an empty array if not provided
      if (!formData.InvitedUsers) {
        formData.InvitedUsers = [];
      }

      // Send PUT request to update the meeting
      const response = await axios.put(
        `https://localhost:7103/api/Meeting/${meetingId}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Log success and handle UI updates
      console.log("Meeting update submitted successfully!", response.data);
      // Example: Reset form fields or show success message to the user

      // Example: Reset form fields or show success message to the user
      alert("Meeting updated successfully!");
      // Optionally, redirect or perform another action upon successful update
    } catch (error) {
      // Handle and log any errors
      console.error("Error submitting meeting update:", error);

      // Example: Display error message to the user
      alert(`Error updating meeting: ${error.message}`);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddRecipient = () => {
    if (
      formData.Recipient &&
      !selectedRecipients.some(
        (recipient) => recipient.value === formData.Recipient
      )
    ) {
      const selectedUser = users.find(
        (user) => user.value === formData.Recipient
      );
      setSelectedRecipients([...selectedRecipients, selectedUser]);
    }
  };

  const handleRemoveRecipient = (recipientValue) => {
    setSelectedRecipients(
      selectedRecipients.filter(
        (recipient) => recipient.value !== recipientValue
      )
    );
  };

  const toggleShowRecipients = () => {
    setShowRecipients(!showRecipients);
  };

  return (
    <div
      className="appointment-request-form appointment-request-form-container"
      style={{ marginTop: "50px" }}
    >
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <span className="appointment-request-form number">1</span>Your basic
            details
          </legend>
          <label htmlFor="name">Meeting Title:</label>
          <input
            type="text"
            id="name"
            name="MeetingTitle"
            placeholder="Meeting Title"
            value={formData.MeetingTitle}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset>
          <legend>
            <span className="appointment-request-form number">2</span>
            Appointment Details
          </legend>
          <label htmlFor="appointment_description">
            Appointment Description:
          </label>
          <textarea
            id="appointment_description"
            name="Description"
            placeholder="Appointment Description"
            value={formData.Description}
            onChange={handleChange}
          ></textarea>

          <label htmlFor="date">Date*:</label>
          <input
            type="date"
            name="AttendanceDate"
            value={formData.AttendanceDate}
            onChange={handleChange}
            required
          />

          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="Location"
            placeholder="Location"
            value={formData.Location}
            onChange={handleChange}
            required
          />

          <label htmlFor="recipient">Select Recipient:</label>
          <div className="recipient-selection">
            <select
              id="recipient"
              name="Recipient"
              value={formData.Recipient}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Recipient
              </option>
              {users.map((user) => (
                <option key={user.value} value={user.value}>
                  {user.label}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={handleAddRecipient}
              className="add-recipient-button"
            >
              +
            </button>
          </div>
        </fieldset>

        <div className="button-group">
          <button
            onClick={toggleShowRecipients}
            type="button"
            className="show-recipients-button"
          >
            {showRecipients ? "Hide Selected" : "Show Selected"}
          </button>
          <button type="submit">Update Meeting</button>
        </div>
      </form>

      {showRecipients && (
        <div
          className="selected-recipients-list"
          style={{ marginRight: "100px" }}
        >
          <h3 style={{ marginLeft: "100px" }}>Selected Recipients:</h3>
          <ul style={{ marginLeft: "100px" }}>
            {selectedRecipients.map((recipient) => (
              <li key={recipient.value}>
                {recipient.label}
                <button
                  onClick={() => handleRemoveRecipient(recipient.value)}
                  className="remove-recipient-button"
                  style={{
                    width: "50px",
                    height: "50px",
                    marginRight: "100px",
                  }}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default EditMeeting;
