const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full p-3 bg-sky-800 text-slate-200 text-xs uppercase text-center">
      <div>
        {new Date().getFullYear().toString()} | QUEST | Careers | Support
      </div>
    </footer>
  );
};

export default Footer;
