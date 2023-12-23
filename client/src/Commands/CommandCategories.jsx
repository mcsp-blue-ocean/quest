import { Link } from "react-router-dom";

const CommandCategories = ({ categories, handleCategoryClick }) => {
  return (
    <>
      <div>
        <ul style={{ backgroundColor: "red" }}>
          {categories &&
            categories.map((category) => (
              <Link to="/commands">
                <li
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  style={{
                    width: "100px",
                    height: "100px",
                    margin: ".25em",
                    backgroundColor: "green",
                    textAlign: "center",
                  }}
                >
                  {category.category}
                </li>
              </Link>
            ))}
        </ul>
      </div>
    </>
  );
};

export default CommandCategories;
