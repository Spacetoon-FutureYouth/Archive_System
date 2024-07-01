import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Components/SharedComponents/Header";
import Footer from "./Components/SharedComponents/Footer";
import Slider from "./Components/HomeComponents/Slider/Slider";
import Schedule from "./Components/HomeComponents/Schedule/Schedule";
import Bubble from "./Components/MessageComponents/Bubble";
import Feature from "./Components/HomeComponents/Feauture";
import FunFacts from "./Components/HomeComponents/FunFacts";
import WhyChoose from "./Components/HomeComponents/WhyChoose/WhyChoose";
import CallSection from "./Components/HomeComponents/CallSection";
import Service from "./Components/HomeComponents/Service/Service";
import ShowUsers from "./Components/ADMIN/Data/ShowUsers";
import Breadcrumbs from "./Components/SharedComponents/Breadcrumbs";
import AddUser from "./Components/ResgistrationComonents/AddUser";
import SendMessage from "./Components/MessageComponents/SendFormasset/MsgForm";
import Profile from "./Components/ResgistrationComonents/Profile";
import Message from "./Components/MessageComponents/Message";
import ShowAttendance from "./Components/MeetingComponents/ShowAttendance";
import ContactUs from "./Components/ContactComponents/ContactUs";
import Blog from "./Components/BlogComponent/Blog";
import Error404 from "./Components/Error404Components/Error404";
import LoginForm from "./Components/ResgistrationComonents/Login";
import DepartmentUserRoleComponent from "./Components/ADMIN/Data/DepartmentUserRoleComponent";
import Edit from "./Components/ResgistrationComonents/EditUser";
import EditDep from "./Components/ADMIN/EditDepRole";
import UserFeatures from "./Components/HomeComponents/UserFeatures";
import AppointmentRequestForm from "./Components/MeetingComponents/MeetingForm/MeetingForm";
import ShowMeetings from "./Components/HomeComponents/ShowMeetings";
import EditMeeting from "./Components/MeetingComponents/MeetingForm/EditMeeting";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  // Check localStorage on component mount
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const storedUsername = localStorage.getItem("username");
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");

    if (storedIsLoggedIn === "true" && storedUserId && storedUsername) {
      setIsLoggedIn(true);
      setUserId(storedUserId);
      setUsername(storedUsername);
    }
  }, []);

  const handleLoginSuccess = (id, name) => {
    localStorage.setItem("userId", id);
    localStorage.setItem("username", name);
    localStorage.setItem("isLoggedIn", "true");
    setUserId(id);
    setUsername(name);
    setIsLoggedIn(true);
    navigate("/Home");
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setUserId(null);
    setUsername("");
    navigate("/");
  };

  return (
    <>
      {isLoggedIn && <Header handleLogout={handleLogout} username={username} />}
      <Routes>
        <Route
          path="/"
          element={<LoginForm onLoginSuccess={handleLoginSuccess} />}
        />
        <Route
          path="/Home"
          element={
            isLoggedIn ? (
              <>
                <Slider />
                <Feature />
                <Bubble />
                <FunFacts />
                <WhyChoose />
                <CallSection />
                <Service />{" "}
              </>
            ) : (
              <LoginForm onLoginSuccess={handleLoginSuccess} />
            )
          }
        />
        <Route
          path="/HomePage"
          element={
            isLoggedIn ? (
              <>
                <Slider />
                <Schedule userId={userId} />
                <Bubble />
                <UserFeatures />
                <FunFacts />
                <WhyChoose />
                <CallSection />
                <Service />{" "}
              </>
            ) : (
              <LoginForm onLoginSuccess={handleLoginSuccess} />
            )
          }
        />
        <Route path="/Feature" element={<Feature />} />
        <Route path="/SendMessage" element={<SendMessage />} />
        <Route path="/Profile" element={<Profile userId={userId} />} />
        <Route path="/Import" element={<Message />} />
        <Route
          path="/ShowUsers"
          element={
            <>
              <Breadcrumbs currentPage="showusers" /> <ShowUsers />
            </>
          }
        />
        <Route
          path="/AddUser"
          element={
            <>
              <Breadcrumbs currentPage="addUser" /> <AddUser />
            </>
          }
        />
        <Route
          path="/EditUser"
          element={
            <>
              <Breadcrumbs currentPage="editUser" /> <Edit />
            </>
          }
        />
        <Route path="/EditUser/:userId" element={<Edit />} />
        <Route
          path="/MeetingStatus/:meetingId"
          element={
            <>
              <Breadcrumbs currentPage="meetingStatus" />
              <ShowAttendance />
            </>
          }
        />
        <Route
          path="/EditMeeting/:meetingId"
          element={
            <>
              <Breadcrumbs currentPage="editMeeting" />
              <EditMeeting />
            </>
          }
        />
        <Route
          path="/CreateMeeting"
          element={
            <>
              <Breadcrumbs currentPage="createmeeting" />
              <AppointmentRequestForm userId={userId} />
            </>
          }
        />
        <Route
          path="/MeetingStatus"
          element={
            <>
              <Breadcrumbs currentPage="meetingStatus" />
              <ShowAttendance />
              <AddUser />
            </>
          }
        />
        <Route
          path="/ShowMeetings"
          element={
            <>
              <Breadcrumbs currentPage="showMeetings" />
              <ShowMeetings userId={userId} />
            </>
          }
        />
        <Route
          path="/AddDepartment"
          element={
            <>
              <Breadcrumbs currentPage="adddepart" />
              <DepartmentUserRoleComponent />
            </>
          }
        />
        <Route
          path="/EditDepartment"
          element={
            <>
              <Breadcrumbs currentPage="editDepartment" />
              <EditDep />
            </>
          }
        />
        <Route
          path="/ContactUs"
          element={
            <>
              <Breadcrumbs currentPage="contactus" /> <ContactUs />
            </>
          }
        />
        <Route
          path="/Blog"
          element={
            <>
              <Breadcrumbs currentPage="blog" /> <Blog />
            </>
          }
        />
        <Route path="*" element={<Error404 />} />{" "}
        {/* Catch-all route for 404 */}
      </Routes>
      {isLoggedIn && <Footer />}
    </>
  );
}

export default App;
