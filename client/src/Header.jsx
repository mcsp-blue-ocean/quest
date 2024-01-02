import HeaderNav from "./Header/HeaderNav";
import logo from "./assets/header/logo.png?web";
import login from "./assets/header/login.svg";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ onToggleModal }) => {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-between p-3 bg-sky-800 uppercase">
      <HeaderNav />
      <img src={logo} className="w-28 order-first sm:order-none" />
      <Link to="/admin">
      <img
        src={login}
        alt="login"
        className="w-14 cursor-pointer"
        onClick={onToggleModal}
      />
      </Link>
    </div>
  );
};

export default Header;

