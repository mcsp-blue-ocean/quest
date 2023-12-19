import Navigation from "./Header/Navigation";
import Icons from "./Header/Icons";
import logo from "./assets/header/logo.png?web";

const Header = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-between p-3 bg-sky-800 text-slate-200 uppercase">
      <Navigation />
      <img src={logo} className="w-28" />
      <Icons />
    </div>
  );
};

export default Header;
