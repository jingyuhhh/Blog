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
          <Link to="/Register" className="a">
              <div className="signin">注册</div>
            </Link>
            <Link to="/Signin" className="a">
              <div className="signin">登录</div>
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
