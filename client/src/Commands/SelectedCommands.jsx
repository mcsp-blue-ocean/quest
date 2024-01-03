import { Link } from "react-router-dom";

const SelectedCommands = ({
  selectedCategoryId,
  filteredCommands,
  categories,
}) => {
  // console.log("hello again!");
  // console.log(filteredCommands[0], "filtered commands from command tester");
  // console.log(categories);

  const categoryParent = categories.map(
    (el) => el.id === selectedCategoryId && el.parent_category
  );
  const categoryName = categories.map(
    (el) => el.id === selectedCategoryId && el.category
  );

  return (
    <div className="md:w-3/4 mx-auto flex flex-col items-center bg-slate-300 pb-10 my-4 rounded relative">
      <p className="bg-sky-900 rounded inline font-bold p-1 m-1 absolute top-0 left-0">
        {categoryParent}
      </p>
      <Link
        to="/categories"
        className="text-black text-2xl font-bold absolute top-0 right-0 px-2"
      >
        x
      </Link>
      <p className="text-center text-black font-bold underline text-5xl mt-10">
        {categoryName}
      </p>
      <ul className="md:w-3/4 mx-auto flex flex-col gap-6 bg-sky-900 mt-10 rounded sm:p-6 p-2 mx-1">
        {filteredCommands &&
          filteredCommands.map((command, index) => (
            <li
              key={index}
              className="bg-sky-950 sm:p-4 p-2 rounded shadow text-lg"
            >
              <p>
                <span className="font-bold">Syntax: </span>
                {command.command_syntax}
              </p>
              <p>
                <span className="font-bold">Description: </span>
                {command.command_description}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SelectedCommands;
