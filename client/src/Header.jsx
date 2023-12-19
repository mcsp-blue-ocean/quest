import Navigation from "./Header/Navigation";
import Panel from "./Header/Panel";
import logo from "./assets/header/logo.png?web";

const Header = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-between p-3 bg-sky-800 uppercase">
      <Navigation />
      <img src={logo} className="w-28 order-first sm:order-none" />
      <Panel />
    </div>
  );
};

export default Header;
