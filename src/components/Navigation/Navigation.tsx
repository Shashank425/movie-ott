import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import HotCarousel from "./HotCarousel/HotCarousel";
import MovieCanvas from "./MovieCanvas/MovieCanvas";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Navbar handleClick={handleClick} />
      <Sidebar show={show} handleClose={handleClose} />
      <HotCarousel />
      <MovieCanvas />
    </>
  );
};

export default Navigation;
