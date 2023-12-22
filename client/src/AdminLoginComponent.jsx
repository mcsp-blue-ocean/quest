import axios from "axios";
import React, { useState } from "react";
import Modal from "./Modal.jsx";

const AdminLoginTest = () => {
  const [token, setToken] = useState(null);

  const handleLogin = async ({ username, password }) => {
    try {
      const response = await axios.post("/api/login", {
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
      <Modal onLogin={handleLogin} />
      {token && <p>Token: {token}</p>}
    </div>
  );
};

export default AdminLoginTest;
