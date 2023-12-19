import axios from "axios";
import React, { useState } from "react";
import AdminLogin from "./AdminLogin";

// ADMIN LOGIN TEST
const AdminLoginTest = () => {
  const [token, setToken] = useState(null);

  const handleLogin = async ({ username, password }) => {
    try {
      // UPDATE WITH DEPLOYMENT URL WHEN COMPLETED
      const response = await axios.post("http://localhost:3001/quest/login", {
        username,
        password,
      });
      setToken(response.data.token);
    } catch (error) {
      console.error("Login failed:", error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Admin Login Test</h2>
      {/* Pass the onLogin function as a prop to AdminLogin */}
      <AdminLogin onLogin={handleLogin} />
      {token && <p>Token: {token}</p>}
    </div>
  );
};

export default AdminLoginTest;

//TOKEN: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzAzMDE5MDQ4LCJleHAiOjE3MDMwMjI2NDh9.q9VWj_TYeYozJUQt8vZc9Pi4GwO57Ypq1t-v7t8RHqk
