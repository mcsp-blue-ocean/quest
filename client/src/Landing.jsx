import Example from "./Landing/Example";
import How from "./Landing/How";
import AdminLoginComponent from "./AdminLoginComponent";
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
      <AdminLoginComponent isOpen={openModal} />
      <How />
      <Example />
    </>
  );
};

export default Landing;
