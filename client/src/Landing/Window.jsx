import { buttonsStyle, windowStyle, buttonGroup } from "../style/style";

const Window = ({ children, color }) => {
  return (
    <div
      className={`${color} ${windowStyle}`}
      style={{ width: "100%", aspectRatio: "6/4" }}
    >
      <div id="buttons" className={buttonGroup}>
        <div className={buttonsStyle}></div>
        <div className={buttonsStyle}></div>
        <div className={buttonsStyle}></div>
      </div>
      {children}
    </div>
  );
};

export default Window;
