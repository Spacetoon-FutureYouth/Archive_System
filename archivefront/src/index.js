import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter} from "react-router-dom"; 
import App from "./App";
import Login from "./Components/ResgistrationComonents/Login";
import Header from "./Components/SharedComponents/Header";
import Error404 from "./Components/Error404Components/Error404";
import Slider from "./Components/HomeComponents/Slider";
import Footer from "./Components/SharedComponents/Footer";
import PreLoad from "./Components/SharedComponents/PreLoad";
import Bubble from "./Components/MessageComponents/Bubble";
import Message from "./Components/MessageComponents/Message";
import Schedule from "./Components/HomeComponents/Schedule";
import Feature from "./Components/HomeComponents/Feauture";
import FunFacts from "./Components/HomeComponents/FunFacts";
import WhyChoose from "./Components/HomeComponents/WhyChoose";
import CallSection from "./Components/HomeComponents/CallSection";
import Service from "./Components/HomeComponents/Service";
import ContactUs from "./Components/ContactComponents/ContactUs";
import Breadcrumbs from "./Components/SharedComponents/Breadcrumbs";
// confligt 
// <<<<<<< Shahd
// import SendForm from "./Components/MessageComponents/SendFormasset/MsgForm";
// =======
// import Register from "./Components/ResgistrationComonents/Regist";
// import LoginForm from "./Components/ResgistrationComonents/Login";
// import AddUser from "./Components/ResgistrationComonents/AddUser";
// import Table from "./Components/ADMIN/Data/ShowUsers";
// >>>>>>> main

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);
