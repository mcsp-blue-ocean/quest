import { footerNav } from "../style/style";

const FooterNav = () => {
  const navigation = ["Features", "Resources", "Blog", "Support"];
  return (
    <ul className={footerNav}>
      {navigation.map((link, index) => (
        <a href="#" key={index}>
          {link}
        </a>
      ))}
    </ul>
  );
};

export default FooterNav;
