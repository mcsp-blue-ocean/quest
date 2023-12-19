import Tech from "./How/Tech";
import computer from "./assets/how/computer.png?web";

const How = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center gap-5 bg-stone-800 p-5 lg:py-8 lg:px-20">
      <div id="left-side" className="sm:w-1/2 sm:pr-5">
        <p className="text-3xl sm:text-4xl font-bold">
          <span className="text-sky-400">Q</span>uick
          <span className="text-sky-400"> U</span>nderstanding of
          <span className="text-sky-400"> E</span>ssential
          <span className="text-sky-400"> S</span>oftware
          <span className="text-sky-400"> T</span>echnologies
        </p>
        <div className="mt-5">
          <p className="font-bold underline">How To Use</p>
          <p className="w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div id="right-side" className="flex flex-col sm:w-1/2 items-center">
        <Tech />
        <img src={computer} alt="computer" />
      </div>
    </div>
  );
};

export default How;
