import HeaderNav from "./Header/HeaderNav";
import logo from "./assets/header/logo.png?web";
import login from "./assets/header/login.png?web";

const Header = ({ onToggleModal }) => {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-between p-3 bg-sky-800 uppercase">
      <HeaderNav />
      <img src={logo} className="w-28 order-first sm:order-none" />
      <img src={login} alt="login" className="w-14" onClick={onToggleModal} />
    </div>
  );
};

export default Header;
