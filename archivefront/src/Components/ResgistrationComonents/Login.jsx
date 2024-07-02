import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handling login in LoginForm component
  const handleLogin = async () => {
    try {
      // Fetch login data
      const response = await fetch("https://localhost:7103/api/Users/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: email,
          Password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const { userId, username, email, image, userAutho } = data; // Retrieve email from response

        // Call onLoginSuccess from props to pass userId, username, and email to App component
        onLoginSuccess(userId, username, email);
        console.log("USER AUTHO", userAutho);
        if (userAutho === 1) {
          navigate("/Home");
        } else if (userAutho === 0) {
          navigate("/HomePage");
        } else {
          // Handle other cases
        }
      } else {
        // Handle login failure
      }
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="left">
          <div className="header">
            <h2 className="animation a1">Welcome Back</h2>
            <h4 className="animation a2">
              Log in to your account using email and password
            </h4>
          </div>
          <div className="form">
            <input
              type="email"
              className="form-field animation a3"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-field animation a4"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="animation a5">
              <a href="/">Forgot Password</a>
            </p>
            <button className="animation a6" onClick={handleLogin}>
              LOGIN
            </button>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default LoginForm;
