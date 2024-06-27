import React, { useState } from "react";
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  const handleLoginSuccess = (id) => {
    setUserId(id);
    setIsLoggedIn(true);
    navigate("/Home");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId(null);
    navigate("/");
  };

  return (
    <>
      {isLoggedIn && <Header handleLogout={handleLogout} />}
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
                <Schedule />
                <Bubble />
                <Feature />
                <FunFacts />
                <WhyChoose />
                <CallSection />
                <Service />
                <ShowUsers />
                <SendMessage />
                <Message />
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
          path="/CreateMeeting"
          element={
            <>
              <Breadcrumbs currentPage="createmeeting" />
              <ShowAttendance />
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
