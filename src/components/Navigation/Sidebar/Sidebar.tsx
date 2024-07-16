import { Offcanvas } from "react-bootstrap";
import "./Sidebar.css";

interface Props {
  show: boolean;
  handleClose: () => void;
}

const Sidebar = ({ show, handleClose }: Props) => {
  const genres: string[] = [
    "Action",
    "Horror",
    "Comedy",
    "Romantic",
    "Drama",
    "Thriller",
    "Crime",
    "Documentary",
    "Sci-Fi",
    "Animated",
  ];
  const languages: string[] = [
    "English",
    "Hindi",
    "Tamil",
    "Telugu",
    "Malayalam",
    "French",
    "German",
  ];
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} className="offcanvas-mod">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="offcanvas-title-mod">
            Genres
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body-mod">
          <ul className="genre-unordered-list">
            {genres.map((genre) => (
              <li className="genre-list-items">
                <a className="genre-anchor">{genre}</a>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
        <Offcanvas.Header>
          <Offcanvas.Title className="offcanvas-title-mod">
            Language
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body-mod">
          <ul className="genre-unordered-list">
            {languages.map((language) => (
              <li className="genre-list-items">
                <a className="genre-anchor">{language}</a>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
