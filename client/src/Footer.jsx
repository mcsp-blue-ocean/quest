import Social from "./Footer/Social";

const Footer = () => {
  const navigation = ["Features", "Resources", "Blog", "Support"];
  return (
    <div className="flex flex-col items-center gap-10 px-20 py-10">
      <ul className="flex gap-6 sm:gap-32 justify-center">
        {navigation.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
      <hr className="w-full" />
      <Social />
      <p className="font-bold">
        © {new Date().getFullYear().toString()} QUEST
      </p>
    </div>
  );
};

export default Footer;
