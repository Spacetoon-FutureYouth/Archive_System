import React from "react";

function MeetingStatus({ attendees, nonAttendees, totalRequests }) {
  return (
    <div>
      <h2>Meeting Status</h2>
      <p>Attendees: {attendees}</p>
      <p>Non-Attendees: {nonAttendees}</p>
      <p>Total Requests: {totalRequests}</p>
    </div>
  );
}

export default MeetingStatus;
