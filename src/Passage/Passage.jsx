import { useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Passage.css";
import { BiLike } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";


function Passage() {
  const articles=[
    {
      id:1,
      title:"a",
      content:"不得不感慨一句，现在的孩子压力太大了（虽然我也年纪不大hhh）",
      time:"2023-5-11",
      tag:"生活杂谈",
      img:"psg1.png",
      liked:0
    },
    {
      id:2,
      title:"b",
      content:"不得不感慨一句，现在的孩子压力太大了（虽然我也年纪不大hhh）",
      time:"2023-1-11",
      tag:"前端",
      img:"psg1.png",
      liked:1
    },
    {
      id:3,
      title:"c",
      content:"不得不感慨一句，现在的孩子压力太大了（虽然我也年纪不大hhh）",
      time:"2024-6-11",
      tag:"前端",
      img:"psg1.png",
      liked:2
    }
  ]
  const tags=["生活杂谈","前端","全部"];
  const [sortType,setSorttype]=useState("time2");
  const [article,setArticle]=useState(articles);
  const [tag,setTag]=useState("全部");
  // async function data(){
  //   try {
  //   const res =await axios.get(`/passage`);
  //   setArticle(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  const sortTypes={
    time1:{
      fn:(a,b)=>{
        let aa=a.time.split("-"),bb=b.time.split("-")
        for(let i=0;i<3;i++){
          if(aa[i]>bb[i]) return 1;
        }
        return -1;
      }
    },
    time2:{
      fn:(a,b)=>{
        let aa=a.time.split("-"),bb=b.time.split("-")
        for(let i=0;i<3;i++){
          if(aa[i]>bb[i]) return -1;
        }
        return 1;
      },
    },
    hot1:{
      fn:(a,b)=>a.liked-b.liked
    },
    hot2:{
      fn:(a,b)=>b.liked-a.liked
    }
    
  }
  function Changetimesort(){
    let nextType="";
    if(sortType==="time1") nextType="time2";
    if(sortType==="time2"||!sortType.includes("time")) nextType="time1";
    setSorttype(nextType);
  }

  function Changehotsort(){
    let nextType="";
    if(!sortType.includes("hot")||sortType==="hot2") nextType="hot1";
    else nextType="hot2";
    setSorttype(nextType);
  }
  const content=article.filter((ob)=>{
    if(tag==="全部") return true;
    else{
      return tag===ob.tag;
    }
  }).sort(sortTypes[sortType].fn).map((article)=>(
    <div className="article-container" key={article.id}>
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
        <div className="article-container-tag">{article.tag}</div>
        <div className="article-container-time">{article.time}</div>
        <div className="article-container-bottom-like">
          <BiLike
            onClick={() => {
              article.liked++;
            }}
          />
          <div className="article-container-bottom-likenum">{article.liked}</div>
        </div>
      </div>
    </div>
  </div>
  ))
  
  return (
    <>
      <Navbar />
      <Link to="/edit"><div className="edit">
        
        编辑</div></Link>
      
      <div className="passage-container">
        <div className="passage-container-center">
          <div className="passage-container-center-left">
            <div className="passage-container-center-left-content" value={sortType}>
              {content}
            </div>
          </div>
          <div className="passage-container-center-right">
            <div className="passage-container-center-right-content">
              <div className="passage-right-sort">
                <div className="passage-right-title">排序</div>
                <div className="passage-right-li" onClick={Changetimesort}>按时间</div>
                <div className="passage-right-li" onClick={Changehotsort}>按热度</div>
              </div>
              <div className="passage-right-topic">
                <div className="passage-right-title">Topics</div>
                {tags.map((cat)=>(
                  <div className="passage-right-li" onClick={()=>{
                    setTag(cat);
                  }}>{cat}</div>
                ))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Passage;
