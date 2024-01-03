import { Link } from "react-router-dom";

const CommandCategories = ({ categories, handleCategoryClick }) => {
  return (
    <>
      <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 bg-sky-950 p-4">
        {categories &&
          categories.map((category) => (
            <Link to="/commands/">
              <li
                className="bg-slate-300 rounded px-4 py-14 relative"
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
              >
                <p className="bg-sky-900 rounded inline font-bold p-1 m-1 absolute top-0 left-0">
                  {category.parent_category}
                </p>
                <p className="text-black text-center font-bold text-4xl">
                  {category.category}
                </p>
              </li>
            </Link>
          ))}
      </ul>
    </>
  );
};

export default CommandCategories;
