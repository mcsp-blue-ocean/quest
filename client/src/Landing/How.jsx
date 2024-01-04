import Tech from "./Tech";
import Window from "./Window";
import computerImg from "../assets/landing/computer.png";
import {
  qColor,
  howStyle,
  questText,
  howText,
  howPara,
  rightStyle,
} from "../style/style";

const How = () => {
  const computer = (
    <img src={computerImg} alt="computer" className="w-3/4 mx-auto" />
  );

  return (
    <div className={howStyle}>
      <div id="left-side" className="sm:w-1/2">
        <p className={questText}>
          <span className={qColor}>Q</span>uick
          <span className={qColor}> U</span>nderstanding of
          <span className={qColor}> E</span>ssential
          <span className={qColor}> S</span>oftware
          <span className={qColor}> T</span>echnologies
        </p>
        <div className="mt-5">
          <p className={howText}>How To Use</p>
          <p className={howPara}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div id="right-side" className={rightStyle}>
        <Tech />
        <Window color={"bg-sky-900"}>{computer}</Window>
      </div>
    </div>
  );
};

export default How;
