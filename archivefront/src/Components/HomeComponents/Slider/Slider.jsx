import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
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

function App({ isLoggedIn, handleLogout }) {
  const [shouldReload, setShouldReload] = useState(false);

  // Effect to handle the initial login and reload
  useEffect(() => {
    if (isLoggedIn && !shouldReload) {
      setShouldReload(true); // Trigger reload
    }
  }, [isLoggedIn, shouldReload]);

  // Effect to perform the actual reload
  useEffect(() => {
    if (shouldReload) {
      window.location.reload();
      setShouldReload(false); // Reset after reload
    }
  }, [shouldReload]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <>
      <Header handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/Home"
          element={
            <>
              <Slider />
              <Schedule />
              <Bubble />
              <Feature />
              <FunFacts />
              <WhyChoose />
              <CallSection />
              <Service />
            </>
          }
        />
        <Route path="/Feature" element={<Feature />} />
        <Route path="/SendMessage" element={<SendMessage />} />
        <Route path="/Profile" element={<Profile />} />
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
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
