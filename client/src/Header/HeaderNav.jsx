import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <>
      <ul className="flex gap-3 text-lg font-bold">
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
