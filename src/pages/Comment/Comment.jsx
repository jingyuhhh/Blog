import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Comment.css";
import imgURL from "./thank.jpg";
import Popup from "./Popup";

function Comment() {
  let messages=[
    {
      id:"火山火山",
      photo:"./photo.jpg",
      comment:"1111111111111111111111111111",
      time:"2023-6-1"
    },
    {
      id:"火山火山",
      photo:"./photo.jpg",
      comment:"1111111111111111111111111111",
      time:"2023-6-1"
    },
    {
      id:"火山火山",
      photo:"./photo.jpg",
      comment:"1111111111111111111111111111",
      time:"2023-6-1"
    },
    {
      id:"火山火山",
      photo:"./photo.jpg",
      comment:"1111111111111111111111111111",
      time:"2023-6-1"
    },
  ]
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
            {messages.map((message)=>(
              <div className="comment-main-center-main">
              <div className="comment-main-center-main-li">
                <div className="comment-main-center-main-li-top">
                  <img src={message.photo} alt="头像" className="comment-photo"></img>
                  <div className="comment-person">
                    <div className="comment-id">{message.id}</div>
                    <div className="comment-time">{message.time}</div>
                  </div>
                </div>
                <div className="comment-content">
                  {message.comment}
                </div>
              </div>
            </div>
            ))}
          <img src={imgURL} alt="thank" className="comment-thank"></img>
        </div>
      </div>
      <Popup trigger={popup} setTrigger={setpopup}></Popup>
    </>
  );
}

export default Comment;
