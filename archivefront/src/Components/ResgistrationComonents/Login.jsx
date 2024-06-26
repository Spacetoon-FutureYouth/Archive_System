import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    try {
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

      console.log("Response:", response);

      if (response.ok) {
        alert(`Login Success: `);
      } else {
        const errorText = await response.text();
        alert(`Login failed: ${response.status} - ${errorText}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
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
              <a href="#">Forgot Password</a>
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
