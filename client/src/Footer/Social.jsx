import { socialIcons } from "./socialData";
import { iconGroup, iconStyle } from "../style/style";

const Social = () => {
  return (
    <ul className={iconGroup}>
      {socialIcons.map(({ icon, id, alt }) => {
        return (
          <li key={id} className={iconStyle}>
            <img
              src={icon}
              alt={alt}
              style={{ width: "100%", aspectRatio: "1/1" }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
