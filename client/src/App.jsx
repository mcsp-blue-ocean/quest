import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import Chatbot from "./Chatbot";
import Modal from "./Modal";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div id="main" className="mx-auto max-w-7xl h-dvh text-stone-200">
    <Header onToggleModal={handleToggleModal} />
      {openModal && <Modal />}
      <Router>
        <Routes>
          <Route path="/home" Component={Landing} />
          <Route path="*" Component={Landing} />
        </Routes>
      </Router>
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
