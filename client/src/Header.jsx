import HeaderNav from "./Header/HeaderNav";
import logo from "./assets/header/logo.png?web";
import login from "./assets/header/login.svg";
import logout from "./assets/header/logout.svg";
import React from "react";
import { Link } from "react-router-dom";
import { headerStyle } from "./style/style";

const Header = ({ onToggleModal, loggedIn, handleLogOut }) => {
  return (
    <div className="bg-sky-800">
      <div className={headerStyle}>
        <HeaderNav />
        <img src={logo} alt="logo" className="w-28 sm:block hidden" />
        {loggedIn ? (
          <button onClick={handleLogOut}>
            <img src={logout} alt="logout" className="w-14" />
          </button>
        ) : (
          <Link to="/admin">
            <button onClick={onToggleModal}>
              <img src={login} alt="login" className="w-12" />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
