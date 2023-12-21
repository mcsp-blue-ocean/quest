const HeaderNav = () => {
  const links = ["Home", "Commands"];
  return (
    <ul className="flex gap-3 text-lg font-bold">
      {links.map((link, index) => (
        <li key={index}>{link}</li>
      ))}
    </ul>
  );
};

export default HeaderNav;
