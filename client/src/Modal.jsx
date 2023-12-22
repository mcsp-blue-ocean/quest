import axios from "axios";
import React, { useState } from "react";

const ModalLogin = ({ isOpen }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  if (!isOpen) {
    return null;
  }

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
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
      <div className="popup">
        <div className="popup-inner">
          <h2 className="text-center">Login</h2>
          <br />
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <br />
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      {token && <p>Token: {token}</p>}
    </div>
  );
};

export default ModalLogin;
