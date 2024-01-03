import Window from "./Window";

const Example = () => {
  const pStyle = "max-w-prose leading-relaxed mb-2";
  const examples = (
    <ul id="examples" className="p-2">
      <li className={pStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </li>
      <li className={pStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </li>
      <li className={pStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </li>
    </ul>
  );

  return (
    <div className="flex sm:flex-row flex-col items-center bg-sky-800 shadow-xl p-5 lg:px-20 gap-5">
      <div id="left-side" className="sm:w-1/2">
        <Window color={"bg-stone-800/80"}>{examples}</Window>
      </div>
      <div id="right-side" className="sm:w-1/2">
        <p className="text-6xl font-bold underline mb-5">Examples</p>
        <p className={`${pStyle} mb-5`}>
          Crazy cool stuff about the examples and stuff. Crazy cool stuff about
          the examples and stuff.
        </p>
        <p className={`${pStyle} mb-5`}>
          Embark on the Ultimate Coding Quest with QUEST: Quick Understanding of
          Essential Software Technologies! Unleash the full potential of command
          line mastery, from Node.js to SQL, Git to React. Elevate your skills
          with real command examples and let our AI Chatbot be your guide. Join
          us on a journey where learning meets excitement. Start your QUEST
          today!"
        </p>
        <button className="bg-stone-800 font-bold p-3 rounded">
          Start Learning Now!
        </button>
      </div>
    </div>
  );
};

export default Example;
