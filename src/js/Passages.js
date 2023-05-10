import { Link } from "react-router-dom";
import "../css/About.css";

function Passages() {
  return (
    <Link className="about passages" to="/passages">
      文章
    </Link>
  );
}

export default Passages;
