const Window = ({ inside, color }) => {
  const buttonsStyle = "bg-sky-300 h-4 w-4 rounded-full";
  return (
    <div
      className={`${color} rounded-lg py-2`}
      style={{ width: "100%", aspectRatio: "6/4" }}
    >
      <div
        id="buttons"
        className="flex gap-2 border-b border-white/20 px-2 pb-2"
      >
        <div className={buttonsStyle}></div>
        <div className={buttonsStyle}></div>
        <div className={buttonsStyle}></div>
      </div>
      {inside}
    </div>
  );
};

export default Window;
