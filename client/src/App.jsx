import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import Modal from "./Modal";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div id="main" className="mx-auto max-w-7xl h-dvh text-stone-200">
      <Router>
        <Header onToggleModal={handleToggleModal} />

        <Routes>
          <Route path="/home" Component={Landing} />
          <Route path="*" Component={Landing} />
        </Routes>
      </Router>

      <Footer />
      {openModal && <Modal />}
    </div>
  );
}

export default App;
