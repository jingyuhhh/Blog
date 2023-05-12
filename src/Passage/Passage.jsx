import Navbar from "../Navbar/Navbar";
import "./Passage.css";
import Article from "./article";

function Passage() {
  return (
    <>
      <Navbar />
      <div className="edit">编辑</div>
      <div className="passage-container">
        <div className="passage-container-center">
          <div className="passage-container-center-left">
            <div className="passage-container-center-left-content">
              <Article />
              <Article />
              <Article />
              <Article />
              <Article />
            </div>
          </div>
          <div className="passage-container-center-right">
            <div className="passage-container-center-right-content">
              <div className="passage-right-sort">
                <div className="passage-right-title">排序</div>
                <div className="passage-right-li">按时间</div>
                <div className="passage-right-li">按热度</div>
              </div>
              <div className="passage-right-topic">
                <div className="passage-right-title">Topics</div>
                <div className="passage-right-li">生活杂谈</div>
                <div className="passage-right-li">前端</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Passage;
