import { techIcons } from "./techData";

const Tech = () => {
  return (
    <ul id="tech-icons" className="flex">
      {techIcons.map(({ id, image, alt }) => (
        <li key={id}>
          <img
            src={image}
            alt={alt}
            style={{ width: "100%", aspectRatio: "1/1" }}
          ></img>
        </li>
      ))}
    </ul>
  );
};

export default Tech;
