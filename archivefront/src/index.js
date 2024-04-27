import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./Components/SharedComponents/Header";
import Slider from "./Components/HomeComponents/Slider";
import Footer from "./Components/SharedComponents/Footer";
import PreLoad from "./Components/SharedComponents/PreLoad";
import Bubble from "./Components/MessageComponents/Bubble";
import Message from "./Components/MessageComponents/Message";
import Register from "./Components/ResgistrationComonents/Regist";
import LoginForm from "./Components/ResgistrationComonents/Login";
import AddUser from "./Components/ResgistrationComonents/AddUser";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <PreLoad /> */}
    <Header />
    <Bubble />
    <Slider />
    <AddUser />
    <Message />
  </React.StrictMode>
);
