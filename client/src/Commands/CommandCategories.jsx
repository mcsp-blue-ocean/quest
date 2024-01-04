import { Link } from "react-router-dom";
import {
  categoriesStyle,
  categoryStyle,
  parentCatStyle,
  categoryText,
} from "../style/style";

const CommandCategories = ({ categories, handleCategoryClick }) => {
  return (
    <>
      <ul className={categoriesStyle}>
        {categories &&
          categories.map(({ category, id, parent_category }) => (
            <Link to="/commands/">
              <li
                className={categoryStyle}
                key={id}
                onClick={() => handleCategoryClick(id)}
              >
                <p className={parentCatStyle}>{parent_category}</p>
                <p className={categoryText}>{category}</p>
              </li>
            </Link>
          ))}
      </ul>
    </>
  );
};

export default CommandCategories;
