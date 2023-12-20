import Window from "./Window";

const Example = () => {
  const examples = (
    <ul id="examples" className="p-2">
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </li>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </li>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </li>
    </ul>
  );

  return (
    <div className="flex sm:flex-row flex-col items-center bg-sky-800 p-5 lg:py-8 lg:px-20 gap-5">
      <div id="left-side">
        <Window inside={examples} color={"bg-stone-800"} />
      </div>
      <div id="right-side">
        <p className="text-6xl font-bold underline mb-5">Examples</p>
        <p className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-stone-800 font-bold p-3 rounded">
          Start Learning Now!
        </button>
      </div>
    </div>
  );
};

export default Example;
