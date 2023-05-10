import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { React } from "react";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="left">
        <Link className="logo" to="/">
          Volcano's Blog
        </Link>
        <Link className="passage focus" to="/passages">
          Passages
        </Link>
        <Link className="passage comment" to="/comments">
          Leave A Message
        </Link>
      </div>

      <input type="text" placeholder="Search..."></input>
    </div>
  );
}

export default Navbar;
