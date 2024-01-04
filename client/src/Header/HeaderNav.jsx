import { Link } from "react-router-dom";
import { linkStyle } from "../style/style";

const HeaderNav = () => {
  return (
    <>
      <ul className={linkStyle}>
        <li>
          <Link to="/home"> Home</Link>
        </li>
        <li>
          <Link to="/categories"> Commands</Link>
        </li>
      </ul>
    </>
  );
};

export default HeaderNav;
