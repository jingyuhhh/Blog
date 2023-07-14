import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Passage.css";
import { Link,Outlet } from "react-router-dom";
import axios from "axios";



function Passage() {

  const [articles,setArticles]  =useState([]);
  const [article,setArticle]=useState([]);
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`http://localhost:8888/api/articles`);
        setArticles(res.data);
        
      } catch(error){
        console.log(error);
      }
      
    }
    fetchData();
  },[]);
  useEffect(()=>{
    setArticle(articles);
  },[articles])

  const tags=["生活杂谈","学习笔记","读书笔记","全部"];
  const [sortType,setSorttype]=useState("time2");
  
  const [content,setContent] = useState(<></>);

  useEffect(()=>{
    console.log(article);
    let filtered =article.sort(sortTypes[sortType].fn).map((article)=>(
      <Link to={article.id.toString()}>
      <div className="article-container" key={article.id}>
      <div className="article-main">
        <div className="article-main-word">
          <div className="article-main-title">{article.title}</div>
          <div className="article-main-body">
            {article.content}
          </div>
        </div>
        {/* <img src={require(`./${article.img}`)} alt="文章配图" className="article-main-img"></img> */}
      </div>
      <div className="article-container-bottom">
        <div className="article-container-bottom-left">
          <div className="article-container-tag">{article.cat}</div>
          <div className="article-container-time">{article.date}</div>
          <div className="article-container-bottom-like">
          </div>
        </div>
      </div>
    </div>
    </Link>
    ))
    setContent(filtered);
  },[article])
  let ob="";

  const sortTypes={
    time1:{
      fn:(a,b)=>{
        let aa=a.date.split("-"),bb=b.date.split("-");
        
        let dateA = new Date(aa[0], aa[1] - 1, aa[2]);
        let dateB = new Date(bb[0], bb[1] - 1, bb[2]);
        
        if (dateA > dateB) return 1;
        if (dateA < dateB) return -1;
        return 0;
      }
    },
    time2:{
      fn:(a,b)=>{
        
        let aa=a.date.split("-"),bb=b.date.split("-");
        let dateA = new Date(aa[0], aa[1] - 1, aa[2]);
        let dateB = new Date(bb[0], bb[1] - 1, bb[2]);
        if (dateA > dateB) return -1;
        if (dateA < dateB) return 1;
        return 0;
      },
    },

    
  }
  function Changetimesort(){
    let nextType="";
    if(sortType==="time1") nextType="time2";
    if(sortType==="time2"||!sortType.includes("time")) nextType="time1";
    setSorttype(nextType);
    
  }

  useEffect(()=>{
    const sortedArticle = [...article];
    sortedArticle.sort(sortTypes[sortType].fn);
    setArticle(sortedArticle);
  },[sortType])

  function Search(ob){
    let sorted = articles.filter((arg)=>
      arg.content.includes(ob)||arg.title.includes(ob)
    )
    setArticle(sorted);
  }
  
 
  
  return (
    <>
      <Navbar />
      <Link to="/edit">
        <div className="edit">编辑</div>
      </Link>

      <div className="passage-container">
        <div className="passage-container-center">
          <div className="passage-container-center-left">
            <div className="passage-container-center-left-content" value={sortType}>
              {content}
            </div>
          </div>
          <div className="passage-container-center-right">
            <div className="passage-container-center-right-content">
            <div className="navbar-search">
              <svg
                aria-hidden="true"
                class="pre-nav-design-icon"
                focusable="false"
                
                viewBox="0 0 24 24"
                className="search-svg"
                role="img"
                width="24px"
                height="24px"
                fill="none"
              >
                <path
                  stroke="currentColor"
  
                  d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
                ></path>
              </svg>
              <input
                className="navbar-search-input"
                placeholder="搜索文章" onChange={(e)=>{
                  ob=e.target.value;
                  
                }} onKeyDown={(e)=>{
                  if(e.keyCode===13){
                    Search(ob);
                  }
                }}
              ></input>
            </div>
              <div className="passage-right-sort">
                <div className="passage-right-title">排序</div>
                <div className="passage-right-li" onClick={Changetimesort}>按时间</div>
                {/* <div className="passage-right-li" onClick={Changehotsort}>按热度</div> */}
              </div>
              <div className="passage-right-topic">
                <div className="passage-right-title">Topics</div>
                <div className="passage-right-topic-container">
                {tags.map((cat)=>(
                  <div className="passage-right-li" onClick={(e)=>{
                    let sorted = articles.filter((ob)=>
                    ob.cat === e.target.innerText|| e.target.innerText==="全部")
                  setArticle(sorted);

                  }}>{cat}</div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Passage;