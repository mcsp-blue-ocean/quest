import Window from "./Window";

const Example = () => {
  const pStyle = "max-w-prose leading-relaxed mb-2";
  const examples = (
    <ul id="examples" className="p-2">
      <li className={pStyle}>
        git add example_file_name <br></br>
        Description: Add a file to the staging area.
      </li>
      <li className={pStyle}>
        git commit -m "your message here" <br></br>
        Description: Commit staged changes with a message.
      </li>
      <li className={pStyle}>
        git push <br></br>
        Description: Pushes the comitted changes to a remote repository.
      </li>
      <li className={pStyle}>
        git pull <br></br>
        Description: Update local repository to the newest commit.
      </li>
    </ul>
  );

  return (
    <div className="flex sm:flex-row flex-col items-center bg-sky-800 shadow-xl p-5 lg:px-20 gap-5">
      <div id="left-side" className="sm:w-1/2">
        <Window color={"bg-stone-800/80"}>{examples}</Window>
      </div>
      <div id="right-side" className="sm:w-1/2">
        <p className="text-4xl font-bold underline mb-5">How to Use:</p>
        <p className={`${pStyle} mb-5`}>
          Whether you need a quick reference for Syntax or ask the AI Chatbot a question, QUEST is here to help you!  To use the Command Cheatsheets,
          click on the Commands tab at the top and select the Category that you would like to reference.  Looking for a category or syntax that isn't on there?  No problem!  Ask
          our friendly AI chatbot, powered by Gemini AI, to answer all of your questions ASAP!

        </p>
        <button className="bg-stone-800 font-bold p-3 rounded">
          Start Learning Now!
        </button>
      </div>
    </div>
  );
};

export default Example;
