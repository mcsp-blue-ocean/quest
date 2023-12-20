import { socialIcons } from "./socialData";

const Social = () => {
  return (
    <ul className="flex gap-5 sm:gap-10">
      {socialIcons.map(({ icon, id, alt }) => {
        return (
          <li
            key={id}
            className="w-12 h-12 rounded-full bg-sky-800 p-1 border border-white/30"
          >
            <img src={icon} alt={alt} />
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
