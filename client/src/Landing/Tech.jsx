import { techIcons } from "./techData";

const Tech = () => {
  return (
    <ul id="tech-icons" className="flex gap-2">
      {techIcons.map(({ id, image, alt }) => (
        <li key={id}>
          <img
            src={image}
            alt={alt}
            style={{ width: "100%", aspectRatio: "1/1" }}
            className="mb-2"
          ></img>
        </li>
      ))}
    </ul>
  );
};

export default Tech;
