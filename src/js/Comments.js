import { Link } from "react-router-dom";
import "../css/About.css";

function Comments() {
  return (
    <Link className="about comments" to="/comments">
      留言
    </Link>
  );
}

export default Comments;
