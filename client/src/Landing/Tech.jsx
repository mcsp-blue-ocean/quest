import html from "../assets/how/html.png?web";
import css from "../assets/how/css.png?web";
import js from "../assets/how/js.png?web";
import react from "../assets/how/react.png?web";
import sql from "../assets/how/sql.png?web";

const Tech = () => {
  const techIcons = [
    {
      id: 0,
      image: html,
    },
    {
      id: 1,
      image: css,
    },
    {
      id: 2,
      image: js,
    },
    {
      id: 3,
      image: react,
    },
    {
      id: 4,
      image: sql,
    },
  ];
  return (
    <div id="tech-icons" className="flex">
      {techIcons.map(({ id, image }) => (
        <img
          key={id}
          src={image}
          alt={`icon ${id}`}
          style={{ width: "100%", aspectRatio: "1/1" }}
        ></img>
      ))}
    </div>
  );
};

export default Tech;
