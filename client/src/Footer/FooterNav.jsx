const FooterNav = () => {
  const navigation = ["Features", "Resources", "Blog", "Support"];
  return (
    <ul className="flex gap-6 sm:gap-32 justify-center text-lg font-bold">
      {navigation.map((link, index) => (
        <li key={index}>{link}</li>
      ))}
    </ul>
  );
};

export default FooterNav;
