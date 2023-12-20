import Example from "./Landing/Example";
import How from "./Landing/How";
import Modal from "./Landing/Modal";
import React, { useState } from "react";
import Header from "./Header";

const Landing = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <Header onToggleModal={handleToggleModal} />
      <Modal open={openModal} />
      <How />
      <Example />
    </>
  );
};

export default Landing;
