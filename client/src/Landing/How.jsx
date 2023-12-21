import Tech from "./Tech";
import Window from "./Window";
import computerImg from "../assets/how/computer.png";

const How = () => {
  const blue = "text-sky-400";
  const computer = (
    <img src={computerImg} alt="computer" className="w-3/4 mx-auto" />
  );
  return (
    <div className="flex sm:flex-row flex-col items-center gap-5 bg-stone-800 p-5 lg:py-8 lg:px-20">
      <div id="left-side" className="sm:w-1/2">
        <p className="text-3xl sm:text-4xl font-bold">
          <span className={blue}>Q</span>uick
          <span className={blue}> U</span>nderstanding of
          <span className={blue}> E</span>ssential
          <span className={blue}> S</span>oftware
          <span className={blue}> T</span>echnologies
        </p>
        <div className="mt-5">
          <p className="font-bold underline">How To Use</p>
          <p className="sm:w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
