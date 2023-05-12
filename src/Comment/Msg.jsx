import "./Comment.css";
import imgURL from "./photo.jpg";

function Msg() {
  return (
    <div className="comment-main-center-main">
      <div className="comment-main-center-main-li">
        <div className="comment-main-center-main-li-top">
          <img src={imgURL} alt="头像" className="comment-photo"></img>
          <div className="comment-person">
            <div className="comment-id">火山火山</div>
            <div className="comment-time">1天前</div>
          </div>
        </div>
        <div className="comment-content">
          111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        </div>
      </div>
    </div>
  );
}

export default Msg;
