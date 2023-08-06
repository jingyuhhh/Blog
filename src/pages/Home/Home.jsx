import "./Home.scss";
import Navbar from "../../component/Navbar/Navbar";
import {  useEffect, useRef, useState } from "react";
import TimeLine from "./Component/TimeLine";
import Stack from "./Component/Stack";
import Observer from "../../component/Observer/Observer";
import axios from "axios";


function Home() {
  let content="Welcome to my Blog!";
  let [text,setText]=useState("");
  const canvasEl = useRef()
  useEffect(()=>{
    async function getData(){
      const res = await axios.get("https://github-contributions-api.now.sh/v1/volcano621");
      return res.data;
    }
    const contributionData = getData();
    console.log(contributionData);
  },[])
  
  // 打字机效果
  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(content.slice(0, text.length + 1));
    }, 100);
    return () => clearTimeout(timeout);
  }, [text]);
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="main-center">
          <div className="welcome blink-cursor">{text}</div>
          <div className="timeline">
            <TimeLine />
          </div>
          <div ref={canvasEl}></div>
          <Observer>
            <Stack />  
          </Observer>
                

        </div>
      </div>
    </>
  );
}

export default Home;
