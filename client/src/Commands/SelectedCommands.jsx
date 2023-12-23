const SelectedCommands = ({
  selectedCategoryId,
  filteredCommands,
  categories,
}) => {
  console.log("hello again!");
  console.log(filteredCommands[0], "filtered commands from command tester");
  console.log(categories);

  let categoryName;

  // this is a terrible way to get the correct category name
  TODO: for (let el of categories) {
    if (el.id === selectedCategoryId) {
      categoryName = el.category;
    }
  }

  return (
    <>
      {categoryName && <h2>{categoryName}</h2>}
      <ul style={{ backgroundColor: "black" }}>
        {filteredCommands &&
          filteredCommands.map((command, index) => (
            <li
              key={index}
              style={{ margin: ".25em", height: "5em", width: "100%" }}
            >
              <p>Syntax: {command.command_syntax} </p>
              <p>Description:{command.command_description}</p>
              <br />
            </li>
          ))}
      </ul>
    </>
  );
};

export default SelectedCommands;
