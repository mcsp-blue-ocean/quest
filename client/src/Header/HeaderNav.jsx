import { Link } from "react-router-dom";
import React from "react";
import { linkStyle } from "../style/style";

const HeaderNav = () => {
  return (
    <>
      <ul className={linkStyle}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories"> Commands</Link>
        </li>
      </ul>
    </>
  );
};

export default HeaderNav;
