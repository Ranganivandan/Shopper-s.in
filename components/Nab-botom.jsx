import "./navbot.css";
import { NavLink, Link } from "react-router-dom";
export function Nabbotom() {
  return (
    <div className="nabbtom">
      <ul>
        <li>
          <NavLink style={{ textDecoration: "none" }} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: "none" }} to="/About">
            About
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: "none" }} to="/Collection">
            Collection
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: "none" }} to="/Mens">
            Mens
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: "none" }} to="/Contact">
            Contact-us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
