import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Passage.css";
import { BiLike } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";


function Passage() {
  const [article,setArticle]=useState([]);
  async function data(){
    try {
    const res =await axios.get(`/passage`);
    setArticle(res);
    } catch (error) {
      console.log(error);
    }
  }
  
  // const articles=[
  //   {
  //     title:"a",
  //     content:"不得不感慨一句，现在的孩子压力太大了（虽然我也年纪不大hhh）",
  //     time:"2023-5-11",
  //     tag:"生活杂谈",
  //     img:"psg1.png"
  //   },
  //   {
  //     title:"b",
  //     content:"不得不感慨一句，现在的孩子压力太大了（虽然我也年纪不大hhh）",
  //     time:"2023-1-11",
  //     tag:"前端",
  //     img:"psg1.png"
  //   },
  //   {
  //     title:"c",
  //     content:"不得不感慨一句，现在的孩子压力太大了（虽然我也年纪不大hhh）",
  //     time:"2024-6-11",
  //     tag:"前端",
  //     img:"psg1.png"
  //   }
  // ]
  function compareTime(a,b){
    let aa=a.time.split("-"),bb=b.time.split("-");
    for(let i=0;i<3;i++){
      if(aa[i]===bb[i]) continue;
      else return aa[i]-bb[i];
    }
    return 1;
  }
  function sortTime(){
    article.sort(compareTime);
  }

  
  return (
    <>
      <Navbar />
      <Link to="/edit"><div className="edit">
        
        编辑</div></Link>
      
      <div className="passage-container">
        <div className="passage-container-center">
          <div className="passage-container-center-left">
            <div className="passage-container-center-left-content">
              {article.map((article)=>(
                <div className="article-container">
                <div className="article-main">
                  <div className="article-main-word">
                    <div className="article-main-title">{article.title}</div>
                    <div className="article-main-body">
                      {article.content}
                    </div>
                  </div>
                  <img src={`./${article.img}`} alt="文章配图" className="article-main-img"></img>
                </div>
                <div className="article-container-bottom">
                  <div className="article-container-bottom-left">
                    <div className="article-container-tag">{article.cat}</div>
                    <div className="article-container-time">{article.time}</div>
                    <div className="article-container-bottom-like">
                      {/* <BiLike
                        onClick={() => {
                          setLike(like + 1);
                        }}
                      /> */}
                      {/* <div className="article-container-bottom-likenum">{like}</div> */}
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
          <div className="passage-container-center-right">
            <div className="passage-container-center-right-content">
              <div className="passage-right-sort">
                <div className="passage-right-title">排序</div>
                <div className="passage-right-li" onClick={
                  ()=>{
                    sortTime();
                    setArticle(article);
                  }
                }>按时间</div>
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
