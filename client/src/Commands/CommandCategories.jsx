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
            <li key={id} onClick={() => handleCategoryClick(id)}>
              <Link to="/commands/">
                <div className={categoryStyle}>
                  <p className={parentCatStyle}>{parent_category}</p>
                  <p className={categoryText}>{category}</p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default CommandCategories;
