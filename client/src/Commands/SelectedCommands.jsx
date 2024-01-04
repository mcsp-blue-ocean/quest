import { Link } from "react-router-dom";
import Command from "./Command";
import close from "../assets/commands/close.svg";
import {
  commandRootStyle,
  commandCatStyle,
  commandParentStyle,
  commandCatText,
  closeStyle,
  scrollStyling,
  commandEntryStyle,
} from "../style/style";

const SelectedCommands = ({
  selectedCategoryId,
  filteredCommands,
  categories,
}) => {
  const categoryParent = categories.map(
    (el) => el.id === selectedCategoryId && el.parent_category
  );
  const categoryName = categories.map(
    (el) => el.id === selectedCategoryId && el.category
  );

  return (
    <div className={commandRootStyle}>
      <div className={commandCatStyle}>
        <p className={commandParentStyle}>{categoryParent}</p>
        <Link to="/categories" className={closeStyle}>
          <img src={close} alt="close" />
        </Link>
        <p className={commandCatText}>{categoryName}</p>
        <ul className={scrollStyling}>
          {filteredCommands &&
            filteredCommands.map(
              ({ command_syntax, command_description }, index) => (
                <li key={index} className={commandEntryStyle}>
                  <Command syntax={command_syntax} />
                  <p>
                    <span className="font-bold">Description: </span>
                    {command_description}
                  </p>
                </li>
              )
            )}
        </ul>
      </div>
    </div>
  );
};

export default SelectedCommands;
