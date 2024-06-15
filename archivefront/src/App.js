import {Route, Routes, Link} from "react-router-dom";
import Error404 from "./Components/Error404Components/Error404";
import Header from "./Components/SharedComponents/Header";
import Slider from "./Components/HomeComponents/Slider/Slider";
import Schedule from "./Components/HomeComponents/Schedule/Schedule";
import Bubble from "./Components/MessageComponents/Bubble";
import Feature from "./Components/HomeComponents/Feauture";
import FunFacts from "./Components/HomeComponents/FunFacts";
import WhyChoose from "./Components/HomeComponents/WhyChoose/WhyChoose";
import CallSection from "./Components/HomeComponents/CallSection";
import Service from "./Components/HomeComponents/Service/Service";
import Footer from "./Components/SharedComponents/Footer";
import Login from "./Components/ResgistrationComonents/Login";
import Register from "./Components/ResgistrationComonents/Regist";
import AddUser from "./Components/ResgistrationComonents/AddUser";
import ShowUsers from "./Components/ADMIN/Data/ShowUsers";
import Breadcrumbs from "./Components/SharedComponents/Breadcrumbs";
import SendMessage from "./Components/MessageComponents/SendFormasset/MsgForm";
import Profile from "./Components/ResgistrationComonents/Profile";
import Message from "./Components/MessageComponents/Message";
import ShowAttendance from "./Components/MeetingComponents/ShowAttendance";
import ContactUs from "./Components/ContactComponents/ContactUs";
import Blog from "./Components/BlogComponent/Blog";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
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
        <Route path="/Feature" element={<Feature />}></Route>
        <Route path="/Login" element={<Login />} />
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
          path="/BLog"
          element={
            <>
              <Breadcrumbs currentPage="blog" /> <Blog />
            </>
          }
        />
      </Routes>
      <Footer />
  </>
  );
}

export default App;
