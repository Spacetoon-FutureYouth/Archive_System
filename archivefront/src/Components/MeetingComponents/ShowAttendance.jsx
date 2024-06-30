import React, { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "./UserStatus";
import DateTime from "./DateTime";
import { useParams } from "react-router-dom";

function ShowAttendance() {
  const { meetingId } = useParams();
  const [attendees, setAttendees] = useState(0);
  const [nonAttendees, setNonAttendees] = useState(0);
  const [totalRequests, setTotalRequests] = useState(0);
  const [userData, setUserData] = useState([]);
  const [meetingTime, setMeetingTime] = useState(null); // State to hold meeting time

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        if (!meetingId) return;

        // Fetch total invitations
        const totalRequestsResponse = await axios.get(
          `https://localhost:7103/api/Meeting/invitationcount/${meetingId}`
        );
        const totalRequestsCount = totalRequestsResponse.data.invitationCount;

        const acceptedInvitationsResponse = await axios.get(
          `https://localhost:7103/api/Meeting/acceptedinvitationcount/${meetingId}`
        );
        const acceptedInvitationsCount =
          acceptedInvitationsResponse.data.acceptedInvitationCount;

        // Calculate non-attendees
        const nonAttendeesCount = totalRequestsCount - acceptedInvitationsCount;

        // Update state with fetched data
        setTotalRequests(totalRequestsCount);
        setAttendees(acceptedInvitationsCount);
        setNonAttendees(nonAttendeesCount);

        // Fetch user data if needed
        const attendanceResponse = await axios.get(
          `https://localhost:7103/api/Meeting/invitations/${meetingId}`
        );
        console.log(attendanceResponse.data); // Log the response to check its structure

        // Ensure the correct path to $values
        const invitations = attendanceResponse.data.$values;
        console.log(invitations); // Log the invitations array to check its structure

        const processedUserData = invitations.map((attendance) => ({
          userId: attendance.userId,
          userName: attendance.userName, // Ensure this field exists in the response
          isAttended: attendance.isAttended, // Ensure this field exists in the response
        }));

        setUserData(processedUserData);

        // Fetch meeting details including time
        const meetingDetailsResponse = await axios.get(
          `https://localhost:7103/api/Meeting/${meetingId}`
        );
        const fetchedMeetingTime = meetingDetailsResponse.data.attendanceDate;
        setMeetingTime(fetchedMeetingTime);
        console.log("Meeting Time:", fetchedMeetingTime); // Log the fetched meeting time
      } catch (error) {
        console.error("Error fetching attendance data:", error);
      }
    };

    fetchAttendanceData();
  }, [meetingId]);

  return (
    <>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: "1",
            minWidth: "70px",
            borderRadius: "10px",
            backgroundColor: "lightgray",
            padding: "5px",
            marginBottom: "10px",
            marginRight: "60px",
            marginLeft: "60px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              marginBottom: "5px",
              color: "blue",
            }}
          >
            Schedule appointments
          </div>
          <div
            style={{
              fontSize: "60px",
              color: "black",
            }}
          >
            {totalRequests}
          </div>
        </div>
        <div
          style={{
            flex: "1",
            minWidth: "70px",
            borderRadius: "10px",
            backgroundColor: "lightgray",
            padding: "5px",
            marginBottom: "10px",
            marginRight: "60px",
            marginLeft: "60px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              marginBottom: "5px",
              color: "blue",
            }}
          >
            Confirmed appointments
          </div>
          <div
            style={{
              fontSize: "60px",
              color: "green",
            }}
          >
            {attendees}
          </div>
        </div>
        <div
          style={{
            flex: "1",
            minWidth: "70px",
            borderRadius: "10px",
            backgroundColor: "lightgray",
            padding: "5px",
            marginBottom: "10px",
            marginRight: "60px",
            marginLeft: "60px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              marginBottom: "5px",
              color: "blue",
            }}
          >
            Canceled appointments
          </div>
          <div
            style={{
              fontSize: "60px",
              color: "red",
            }}
          >
            {nonAttendees}
          </div>
        </div>
      </div>
      <br />
      {/* Pass meetingTime as prop to DateTime component */}
      <DateTime meetingTime={meetingTime} />
      <br />
      <div
        style={{
          textAlign: "center",
          borderBottom: "1px solid lightgray",
          paddingBottom: "10px",
          marginBottom: "10px",
        }}
      />
      <div
        style={{
          textAlign: "center",
          borderBottom: "1px solid lightgray",
          paddingBottom: "10px",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            marginBottom: "10px",
            color: "red",
          }}
        >
          In attendance
        </div>
      </div>
      <UserTable userData={userData} />
    </>
  );
}

export default ShowAttendance;
