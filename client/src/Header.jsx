import Navigation from "./Header/Navigation";
import logo from "./assets/header/logo.png?web";
import login from "./assets/header/login.png?web";

const Header = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-between p-3 bg-sky-800 uppercase">
      <Navigation />
      <img src={logo} alt="logo" className="w-28 order-first sm:order-none" />
      <img src={login} alt="login" className="w-14" />
    </div>
  );
};

export default Header;
