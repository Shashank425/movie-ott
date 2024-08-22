import "./Navbar.css";
import { NavLink } from "react-router-dom";

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
              <NavLink to="/" className="navbar-logo-label">
                Movies
              </NavLink>
            </li>
            <li className="d-inline">
              <NavLink to="/shows" className="navbar-logo-label">
                Shows
              </NavLink>
            </li>
            <li className="d-inline">
              <NavLink to="/shorts" className="navbar-logo-label">
                Shorts
              </NavLink>
            </li>
            <li className="d-inline">
              <NavLink to="/actors" className="navbar-logo-label">
                Actors
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-list-right">
            <li className="d-inline">
              <NavLink to="/login" className="navbar-logo-label">
                Login
              </NavLink>
            </li>
            <li className="d-inline">
              <NavLink to="/signup" className="navbar-logo-label">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
