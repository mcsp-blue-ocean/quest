import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import Chatbot from "./Chatbot";
import Admin from "./Admin";

import { Routes, Route } from "react-router-dom";
import CommandCategories from "./Commands/CommandCategories";
import SelectedCommands from "./Commands/SelectedCommands.jsx";

function App() {
  const [categories, setCategories] = useState([]);
  const [commands, setCommands] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const handleCategoryClick = (categoryId) => setSelectedCategoryId(categoryId);
  const filteredCommands = commands.filter(
    (command) => command.category_id === selectedCategoryId
  );
  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };
  const fetchCategories = () => {
    fetch("/api/categories")
      .then((response) => {
        if (!response.ok)
          throw new Error(`Failed to fetch categories ${response.status}`);
        return response.json();
      })
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  };

  // fetch commands
  const fetchCommands = () => {
    fetch("/api/commands")
      .then((response) => {
        if (!response.ok)
          throw new Error(`Failed to fetch commands: ${response.status}`);
        return response.json();
      })
      .then((data) => setCommands(data))
      .catch((error) => console.error("Error fetching commands:", error));
  };

  useEffect(() => {
    fetchCommands();
    fetchCategories();
  }, []);

  return (
    <div id="main" className="mx-auto h-dvh text-stone-200">
      <Header onToggleModal={handleToggleModal} />
      <div className="mx-auto max-w-7xl">
        <Routes>
          <Route path="/admin" Component={Admin} />
          <Route path="/home" Component={Landing} />
          <Route
            path="/categories"
            Component={() => (
              <CommandCategories
                selectedCategoryId={selectedCategoryId}
                setSelectedCategoryId={setSelectedCategoryId}
                categories={categories}
                handleCategoryClick={handleCategoryClick}
                filteredCommands={filteredCommands}
              />
            )}
          />
          <Route
            path="/commands"
            Component={() => (
              <SelectedCommands
                selectedCategoryId={selectedCategoryId}
                filteredCommands={filteredCommands}
                categories={categories}
              />
            )}
          />

          <Route path="/" Component={Landing} />
        </Routes>
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
}
//made changes
export default App;
