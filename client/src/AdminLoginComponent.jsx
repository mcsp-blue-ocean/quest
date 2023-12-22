import axios from "axios";
import React, { useState } from "react";
<<<<<<< HEAD
import Modal from "./Modal.jsx";
=======
>>>>>>> 6545037106539ced8f48ac131b32d8e74c0dfc73

const ModalLogin = ({ isOpen }) => {
  const [token, setToken] = useState(null);
  if (!isOpen) {
    return null;
  }

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const username = event.target.username.value;
      const password = event.target.password.value;
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
<<<<<<< HEAD
      <h2>Admin Login Test</h2>
      <Modal onLogin={handleLogin} />
=======
      {/* <h2>Admin Login Test</h2> */}
      <div className="popup">
        <div className="popup-inner">
          <h2 className="text-center">Login</h2>
          <br />
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
            </div>
            <br />
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
            </div>
            <br />
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
>>>>>>> 6545037106539ced8f48ac131b32d8e74c0dfc73
      {token && <p>Token: {token}</p>}
    </div>
  );
};

export default ModalLogin;
