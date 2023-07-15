import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo">
          Volcano's Blog
        </Link>
        <div className="navbar-center">
          <Link to="/passage" className="navbar-content-li">
          文章
        </Link>
        </div>
        

      </div>
      <div className="navbar-secondline">
        <div className="navbar-ad">
          Github:{" "}
          <a
            href="https://github.com/volcano621/Blog"
            className="navbar-ad-link"
          >
            https://github.com/volcano621/Blog
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
