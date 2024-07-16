import "./Navbar.css";

interface Props {
  handleClick: () => void;
}
const Navbar = ({ handleClick }: Props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-bg">
        <div className="container-fluid flex-row">
          <img
            src="/gaze_logo_2.jpeg"
            className="navbar-logo"
            onClick={handleClick}
          />
          <ul className="navbar-list-left">
            <li className="d-inline">
              <a className="navbar-logo-label">Movies</a>
            </li>
            <li className="d-inline">
              <a className="navbar-logo-label">Shows</a>
            </li>
            <li className="d-inline">
              <a className="navbar-logo-label">Shorts</a>
            </li>
            <li className="d-inline">
              <a className="navbar-logo-label">Actors</a>
            </li>
          </ul>
          <ul className="navbar-list-right">
            <li className="d-inline">
              <a className="navbar-logo-label">Login</a>
            </li>
            <li className="d-inline">
              <a className="navbar-logo-label">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
