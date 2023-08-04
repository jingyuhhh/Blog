import "./Home.scss";
import Navbar from "../../component/Navbar/Navbar";
import { useEffect, useState } from "react";
import TimeLine from "./TimeLine";
import sass from "../../assets/sass.svg";
import koa from "../../assets/koa.svg";
import react from "../../assets/react.svg";
import mysql from "../../assets/mysql.svg";
import D3 from "../../assets/D3.jpg";



function Home() {
    let content="Welcome to my Blog!";
    let [a,setA]=useState("");
    const [showStack,setShowStack]=useState(false);
    const [inter,setInter]=useState(null);
    useEffect(()=>{
      let i=0,b="";
      if(inter!==null) return;
      let interval=setInterval(() => {
        if(i>=content.length){
          clearInterval(interval);
        }
        else{
          b = b + content[i];
          setA(b);
          i ++;
        }
      }, 100);
      setInter(interval);
      return ()=>{
        clearInterval(interval);
      }
    },[]);
    const timeOut = setTimeout(() => {
        setShowStack(true)
    }, 3000)
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="main-center">
          <div className="welcome">{a}</div>
          <div className="timeline">
            <TimeLine />
          </div>
            <div>

            <div className={showStack?"stack-container-show":"stack-container"}>
                <h3 >本站搭建没有用任何模板，用到的技术栈如下</h3>
                <div className="stack">
                    <img src={sass} alt="sass" />
                    <img src={koa} alt="koa" />
                    <img src={react} alt="react" />
                    <img src={mysql} alt="mysql" />
                    <img src={D3} alt="D3" />
                </div>
            </div>

            </div>

        </div>
      </div>
    </>
  );
}

export default Home;
