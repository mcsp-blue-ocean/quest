import login from "../assets/header/login.png?web";
import admin from "../assets/header/admin.png?web";

const Icons = () => {
  const headerIcons = [
    {
      id: 0,
      image: login,
    },
    { id: 1, 
      image: admin 
    },
  ];
  return (
    <ul id="icons" className="flex sm:justify-end justify-center">
      {headerIcons.map(({ id, image }) => (
        <img
          key={id}
          src={image}
          alt={`image ${id}`}
          style={{ width: "30%", aspectRatio: "1/1" }}
        />
      ))}
    </ul>
  );
};

export default Icons;
