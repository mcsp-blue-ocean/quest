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
          <p className={howText}>Mission Statement</p>
          <p className={howPara}>
            Embark on the Ultimate Coding Adventure with QUEST: Quick
            Understanding of Essential Software Technologies! Unleash the full
            potential of command line mastery from Node.js to SQL, Git to React.
            Elevate your skills with real command examples and let our AI
            Chatbot be your guide. Join us on a journey where learning meets
            excitement. Start your QUEST today!
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
