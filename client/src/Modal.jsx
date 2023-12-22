import React, { useState } from "react";
const Modal = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      // Pass both username and password in the login request
      await onLogin({ username, password });
      // Clear username and password after successful login
      setUsername("");
      setPassword("");
      setError("");
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please try again.");
    }
  };
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2 className="text-center">Login</h2>
        <br />
        <form>
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
            <button onClick={handleLogin}>Login</button>
            {/* Text is red when an error occurs */}
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
