import React, { useState, useEffect } from "react";
import UserTable from "./UserStatus";
import DateTime from "./DateTime";

function ShowAttendance() {
  const [attendees, setAttendees] = useState(1);
  const [nonAttendees, setNonAttendees] = useState(1);
  const [totalRequests, setTotalRequests] = useState(2);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch user data and update state
    // Example fetch request:
    // fetchUserData().then(data => setUserData(data));
  }, []);

  // Function to update attendance status
  const updateAttendance = (userId, status) => {
    // Update user data in state based on userId and status
    // Update attendees, nonAttendees, totalRequests accordingly
  };

  return (
    <>
      <br />
      <br />
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <div style={headerStyle}>Schedule appointments</div>
          <div style={scheduleCountStyle}>{totalRequests}</div>
        </div>
        <div style={sectionStyle}>
          <div style={headerStyle}>Confirmed appointments</div>
          <div style={confirmedCountStyle}>{attendees}</div>
        </div>
        <div style={sectionStyle}>
          <div style={headerStyle}>Canceled appointments</div>
          <div style={cancelledCountStyle}>{nonAttendees}</div>
        </div>
      </div>
      <br />
      <DateTime />
      <br />
      <div style={dividerStyle} />
      <div style={dividerStyle}>
        <div style={attendanceHeaderStyle}>In attendance</div>
      </div>
      <UserTable userData={userData} updateAttendance={updateAttendance} />
    </>
  );
}

// Styles
const containerStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

const sectionStyle = {
  flex: "1",
  minWidth: "70px", // Adjust width as needed
  borderRadius: "10px", // Makes the edges more circular
  backgroundColor: "lightgray", // Sets the background color to gray
  padding: "5px", // Adjust padding as needed
  marginBottom: "10px",
  marginRight: "60px",
  marginLeft: "60px",
  textAlign: "center",
};

const headerStyle = {
  fontWeight: "bold",
  marginBottom: "5px",
  color: "blue",
};

const scheduleCountStyle = {
  fontSize: "60px", // Increase font size for numbers
  color: "black", // Changed to black for Schedule
};

const confirmedCountStyle = {
  fontSize: "60px", // Increase font size for numbers
  color: "green", // Kept green for Confirmed
};

const cancelledCountStyle = {
  fontSize: "60px", // Increase font size for numbers
  color: "red", // Changed to red for Cancelled
};

const attendanceHeaderStyle = {
  fontWeight: "bold",
  marginBottom: "10px",
  color: "red",
};

const dividerStyle = {
  textAlign: "center",
  borderBottom: "1px solid lightgray",
  paddingBottom: "10px",
  marginBottom: "10px",
};

const grayRectangle = {
  backgroundColor: "#fb667a", // Changed to the specified color
  borderRadius: "10px",
  padding: "20px",
  textAlign: "center",
  marginBottom: "20px",
  marginRight: "180px",
  marginLeft: "180px",
};

const dateHeaderStyle = {
  fontWeight: "bold",
  fontSize: "20px",
  color: "darkblue",
  marginBottom: "5px",
};

const timeHeaderStyle = {
  fontWeight: "bold",
  fontSize: "20px",
  color: "darkgreen",
  marginBottom: "20px",
};

export default ShowAttendance;
