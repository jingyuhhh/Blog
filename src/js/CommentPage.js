import Navbar from "./Navbar";
import "../css/Comment.css";

function CommentPage() {
  console.log("YES");
  return (
    <>
      <Navbar />
      <div className="main1">
        <div className="container container-msg">
          <div className="msg">
            <div className="poster"></div>
            <div className="content"></div>
          </div>
          <div className="msg">
            <div className="poster"></div>
            <div className="content"></div>
          </div>
          <div className="msg">
            <div className="poster"></div>
            <div className="content"></div>
          </div>
          <div className="msg">
            <div className="poster"></div>
            <div className="content"></div>
          </div>
          <div className="msg">
            <div className="poster"></div>
            <div className="content"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentPage;
