import FooterNav from "./Footer/FooterNav";
import Social from "./Footer/Social";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-20 py-10">
      <FooterNav />
      <hr className="w-full" />
      <Social />
      <p className="font-bold">
        © {new Date().getFullYear().toString()} QUEST
      </p>
    </div>
  );
};

export default Footer;
