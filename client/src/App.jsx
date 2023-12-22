import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import AdminLogin from "./AdminLogin";
import Modal from "./Modal"; // Assuming you have a Modal component

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div id="main" className="mx-auto max-w-7xl h-[100dvh] text-stone-200">
      <Router>
        <Header onToggleModal={handleToggleModal} />
        {openModal && <AdminLogin />}
        <Routes>
          <Route path="/home" element={<Landing />} />
          <Route path="*" element={<Landing />} />
        </Routes>

        <Footer />
        {openModal && <Modal />}
      </Router>
    </div>
  );
}

export default App;
