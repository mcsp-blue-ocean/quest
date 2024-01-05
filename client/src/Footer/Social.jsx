import { socialIcons } from "./socialData";
import { iconGroup, iconStyle } from "../style/style";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <ul className={iconGroup}>
      {socialIcons.map(({ icon, id, alt }) => (
        <li key={id} className={iconStyle}>
          <Link to="/">
            <img
              src={icon}
              alt={alt}
              style={{ width: "100%", aspectRatio: "1/1" }}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Social;
