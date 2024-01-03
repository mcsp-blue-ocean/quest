import FooterNav from "./Footer/FooterNav";
import Social from "./Footer/Social";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-sky-900 to-transparent sm:sticky top-full flex flex-col items-center gap-10 px-20 py-4">
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
