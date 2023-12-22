import axios from "axios";
import React, { useState } from "react";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [accessMessage, setAccessMessage] = useState(null);

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post("/api/login", {
        username,
        password,
      });

      const newToken = response.data.token;

      // TOKEN SAVED TO LOCAL STORAGE AND SET AS COMPONENT STATE
      localStorage.setItem("SavedToken", newToken);
      setToken(newToken);

      // SET AXIOS DEFAULT HEADERS ONLY IF TOKEN EXISTS
      if (newToken) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
        setAccessMessage("Access Granted!");
      }
    } catch (error) {
      console.error("Login failed:", error.response.data.error);
      setAccessMessage("Access Denied. Invalid credentials!");
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
      {accessMessage && (
        <p className={token ? "access-granted" : "access-denied"}>
          {accessMessage}
        </p>
      )}
    </div>
  );
};

export default AdminLogin;
