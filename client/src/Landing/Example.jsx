import Window from "./Window";
import { pStyle, exampleStyle, header, buttonStyle } from "../style/style";

const Example = () => {
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
    <div className={exampleStyle}>
      <div id="left-side" className="sm:w-1/2">
        <Window color={"bg-slate-950/60"}>{examples}</Window>
      </div>
      <div id="right-side" className="sm:w-1/2">
        <p className={header}>Examples</p>
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
        <button className={buttonStyle}>Start Learning Now!</button>
      </div>
    </div>
  );
};

export default Example;
