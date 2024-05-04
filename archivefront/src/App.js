import { Route, Routes, Link } from "react-router-dom";
import Error404 from "./Components/Error404Components/Error404";
import Header from "./Components/SharedComponents/Header";
import Slider from "./Components/HomeComponents/Slider";
import Schedule from "./Components/HomeComponents/Schedule";
import Bubble from "./Components/MessageComponents/Bubble";
import Feature from "./Components/HomeComponents/Feauture";
import FunFacts from "./Components/HomeComponents/FunFacts";
import WhyChoose from "./Components/HomeComponents/WhyChoose";
import CallSection from "./Components/HomeComponents/CallSection";
import Service from "./Components/HomeComponents/Service";
import Footer from "./Components/SharedComponents/Footer";
import Login from "./Components/ResgistrationComonents/Login";
import Register from "./Components/ResgistrationComonents/Regist";
import AddUser from "./Components/ResgistrationComonents/AddUser";
import ShowUsers from "./Components/ADMIN/Data/ShowUsers";
import Breadcrumbs from "./Components/SharedComponents/Breadcrumbs";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Slider />
            <Schedule />
            <Bubble />
            <Feature />
            <FunFacts />
            <WhyChoose />
            <CallSection />
            <Service />
            <ShowUsers />
            <Footer />
          </>
        }
      />
      <Route path="/Login" element={<Login />} />
      <Route
        path="/AddUser"
        element={
          <>
            <Header />
            <Breadcrumbs /> <AddUser /> <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
