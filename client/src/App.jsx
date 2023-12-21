import React, { useState } from "react";
import Header from "./Header";
import Landing from "./Landing";
import Modal from "./Landing/Modal"; // Make sure to import the Modal component

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div id="main" className="h-[100dvh] text-stone-200">
      <Header onToggleModal={handleToggleModal} />
      <Modal open={openModal} />
      <Landing />
    </div>
  );
}

export default App;
