import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Navbar handleClick={handleClick} />
      <Sidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default Navigation;
