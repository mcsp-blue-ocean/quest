import React, { useState } from "react";
import axios from "axios";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const loginResponse = await axios.post(
        // CURRENTLY USING A LOCAL HOST, THIS WILL NEED TO BE UPDATED WITH THE DEPLOYMENT URL
        "http://localhost:3001/quest/login",
        {
          password,
        }
      );
      if (loginResponse.data.token) {
        console.log("Access Granted! Open Sesame!");
      } else {
        setError("Access Denied! You shall not pass!");
      }
    } catch (error) {
      console.error("Login failed:", error.response.data.error);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
      {/* Text is red when error occurs */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AdminLogin;
