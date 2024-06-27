import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./Components/ResgistrationComonents/Login";

const RootComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLoginSuccess = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path="/Login"
            element={
              !isLoggedIn ? (
                <LoginForm onLoginSuccess={handleLoginSuccess} />
              ) : (
                <Navigate to="/Home" />
              )
            }
          />
          <Route
            path="/*"
            element={
              isLoggedIn ? (
                <App isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
              ) : (
                <Navigate to="/Login" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootComponent />);
