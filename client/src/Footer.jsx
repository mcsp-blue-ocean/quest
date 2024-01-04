import FooterNav from "./Footer/FooterNav";
import Social from "./Footer/Social";
import React from "react";
import { footerStyle } from "./style/style";

const Footer = () => {
  return (
    <div className={footerStyle}>
      <FooterNav />
      <hr className="w-full" />
      <Social />
      <p className="font-bold">
        © {new Date().getFullYear().toString()} QUEST
      </p>
    </div>
  );
};

export default Footer;
