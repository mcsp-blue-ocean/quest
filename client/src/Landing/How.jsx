import Tech from "./Tech";
import Window from "./Window";
import computerImg from "../assets/landing/computer.png";

const How = () => {
  const blue = "text-sky-400";
  const computer = (
    <img src={computerImg} alt="computer" className="w-3/4 mx-auto" />
  );
  return (
    <div className="flex sm:flex-row flex-col items-center bg-sky-950 p-5 lg:px-10 gap-5">
      <div id="left-side" className="sm:w-1/2">
        <p className="max-w-prose text-3xl sm:text-4xl font-bold">
          <span className={blue}>Q</span>uick
          <span className={blue}> U</span>nderstanding of
          <span className={blue}> E</span>ssential
          <span className={blue}> S</span>oftware
          <span className={blue}> T</span>echnologies
        </p>
        <div className="mt-5">
          <p className="font-bold text-4xl underline">Mission Statement:</p>
          <p className="max-w-prose leading-relaxed text-lg">
          <br></br>Embark on the Ultimate Coding Adventure with QUEST: Quick Understanding of
          Essential Software Technologies! Unleash the full potential of command
          line mastery from Node.js to SQL, Git to React. Elevate your skills
          with real command examples and let our AI Chatbot be your guide. Join
          us on a journey where learning meets excitement. Start your QUEST
          today!
          </p>
        </div>
      </div>
      <div id="right-side" className="flex flex-col sm:w-1/2 items-center">
        <Tech />
        <Window color={"bg-sky-900"}>{computer}</Window>
      </div>
    </div>
  );
};

export default How;
