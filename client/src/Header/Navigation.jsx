const Navigation = () => {
  const links = ["home", "commands"];
  return (
    <ul className="flex gap-3 text-lg">
      {links.map((link, index) => (
        <li key={index}>{link}</li>
      ))}
    </ul>
  );
};

export default Navigation;
