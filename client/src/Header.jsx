import HeaderNav from "./Header/HeaderNav";
import logo from "./assets/header/logo.png?web";
import login from "./assets/header/login.svg";
import React from "react";
import { Link } from "react-router-dom";
import { headerStyle } from "./style/style";

const Header = ({ onToggleModal, loggedIn, handleLogOut}) => {
  return (
    <div className="bg-sky-800">
      <div className={headerStyle}>
        <HeaderNav />
        <img src={logo} className="w-28 sm:block hidden" />
       
          {loggedIn ? <h1 onClick={handleLogOut} style={{cursor: "pointer"}}>Log out</h1> : 
          <Link to="/admin">
          <img
          src={login}
          alt="login"
          className="w-14 cursor-pointer"
          onClick={onToggleModal}
        />
        </Link>
      }
        
      </div>
    </div>
  );
};

export default Header;
