import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Comment.css";
import Msg from "./Msg";
import imgURL from "./thank.jpg";
import Popup from "./Popup";

function Comment() {
  const [popup, setpopup] = useState(false);
  return (
    <>
      <Navbar />
      <div className="comment-main">
        <div className="comment-main-center">
          <div
            className="comment-main-center-top"
            onClick={() => {
              setpopup(true);
            }}
          >
            <div className="comment-share">写下你的建议、评价吧！</div>
          </div>
          <Msg />
          <Msg />
          <Msg />
          <img src={imgURL} alt="thank" className="comment-thank"></img>
        </div>
      </div>
      <Popup trigger={popup} setTrigger={setpopup}></Popup>
    </>
  );
}

export default Comment;
