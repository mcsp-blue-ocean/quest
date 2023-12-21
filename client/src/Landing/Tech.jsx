import { techIcons } from "./techData";

const Tech = () => {
  return (
    <ul id="tech-icons" className="flex">
      {techIcons.map(({ id, image, alt }) => (
        <li key={id} style={{ margin: ".25em"}}>
          <img
            src={image}
            alt={alt}
            style={{ aspectRatio: "1/1", border: "1px solid #282524" }}
          ></img>
        </li>
      ))}
    </ul>
  );
};

export default Tech;
