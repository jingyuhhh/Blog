import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-center">
          <Link to="/" className="logo">
            Volcano's Blog
          </Link>
          <div className="navbar-content">
            <Link to="/passage" className="navbar-content-li">
              文章
            </Link>
            <Link to="/comment" className="navbar-content-li">
              留言
            </Link>
          </div>
          <div className="navbar-center-right">
            <div className="navbar-search">
              <svg
                aria-hidden="true"
                class="pre-nav-design-icon"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="24px"
                height="24px"
                fill="none"
              >
                <path
                  stroke="currentColor"
  
                  d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
                ></path>
              </svg>
              <input
                className="navbar-search-input"
                placeholder="Search"
              ></input>
            </div>
            <Link to="/Signin" className="a">
              <div className="signin">Sign in</div>
            </Link>
            
          </div>
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
