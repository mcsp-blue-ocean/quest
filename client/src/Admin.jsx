import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  adminStyle,
  signInStyle,
  formStyle,
  credInput,
  submitForm,
  regText,
  accountText,
  dangerText,
} from "./style/style";

const Admin = ({ setLoggedIn, setToken, token }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        setLoggedIn(true);
      }
    } catch (error) {
      console.error("Login failed:", error.response.data.error);
      setAccessMessage("Access Denied. Invalid credentials!");
    }
  };

  return (
    <>
      <div className={adminStyle}>
        <p className={signInStyle}>Sign In</p>
        <hr className="w-64" />
        <form className={formStyle} onSubmit={handleLogin}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            className={credInput}
            aria-label="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className={credInput}
            aria-label="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={submitForm} type="submit">
            Submit
          </button>
          <p className={regText}>
            Not registered yet?{" "}
            <Link to="/" className={accountText}>
              Create an Account
            </Link>
          </p>
          {accessMessage && (
            <div className={!token && dangerText}>{accessMessage}</div>
          )}
        </form>
      </div>
    </>
  );
};

export default Admin;
