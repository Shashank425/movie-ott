import { Offcanvas } from "react-bootstrap";
import "./Sidebar.css";

interface Props {
  show: boolean;
  handleClose: () => void;
}

const Sidebar = ({ show, handleClose }: Props) => {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} className="offcanvas-mod">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="offcanvas-title-mod">
            Genres
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body-mod">
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
