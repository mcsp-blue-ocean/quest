import { footerNav } from "../style/style";
import { Link } from "react-router-dom";

const FooterNav = () => {
  const navigation = ["Features", "Resources", "Blog", "Support"];
  return (
    <ul className={footerNav}>
      {navigation.map((link, index) => (
        <li key={index}>
          <Link to="/">{link}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterNav;
