import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import Chatbot from "./Chatbot";
import Admin from "./Admin";
import { Routes, Route, Navigate } from "react-router-dom";
import CommandCategories from "./Commands/CommandCategories";
import SelectedCommands from "./Commands/SelectedCommands.jsx";
import { rootStyle, routeStyle } from "./style/style.js";

function App() {
  const [categories, setCategories] = useState([]);
  const [commands, setCommands] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  const filteredCommands = commands.filter((command) => command.category_id === selectedCategoryId);

  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };

  const handleLogOut = () => {
    setLoggedIn(false);
  }

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  }
  
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

    <div id="main" className={rootStyle}>
      <Header loggedIn={loggedIn} handleLogOut={handleLogOut} />
      <div className={routeStyle}>
        <Routes>
          <Route path="/admin" Component={() => loggedIn ? <Navigate replace to={"/"} /> : <Admin setLoggedIn={setLoggedIn} setToken={setToken} token={token}/> } />
          <Route path="/" Component={Landing} />
          <Route
            path="/categories"
            Component={() => 
              <CommandCategories
                selectedCategoryId={selectedCategoryId}
                setSelectedCategoryId={setSelectedCategoryId}
                categories={categories}
                handleCategoryClick={handleCategoryClick}
                filteredCommands={filteredCommands}
                loggedIn={loggedIn}
              /> 
            }
          />
          <Route
            path="/commands"
            Component={() => (
              <SelectedCommands
                selectedCategoryId={selectedCategoryId}
                filteredCommands={filteredCommands}
                categories={categories}
                loggedIn={loggedIn}
                token={token}
                setToken={setToken}
                fetchCategories={fetchCategories}
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

export default App;
