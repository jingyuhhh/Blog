import "./Comment.css";

function Popup(props) {
  return props.trigger ? (
    <>
      <div className="filter">
        <div className="popup-container">
          <div className="popup-container-top">
            <div className="popup-title">创建帖子</div>
            <div
              className="popup-del"
              onClick={() => {
                props.setTrigger(false);
              }}
            ></div>
          </div>
          <div className="popup-container-middle">
            <input type="text" className="popup-input"></input>
          </div>

          <div className="popup-send">提交</div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default Popup;
