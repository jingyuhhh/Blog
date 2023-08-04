import "./Home.scss";
import Navbar from "../../component/Navbar/Navbar";
import {  useEffect, useState } from "react";
import TimeLine from "./Component/TimeLine";
import Stack from "./Component/Stack";
import { useRef } from "react";

function Home() {
  let content="Welcome to my Blog!";
  let [text,setText]=useState("");
  const eleRef = useRef();
  const [triggerFadeIn, setTriggerFadeIn] = useState(false);
  // 打字机效果
  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(content.slice(0, text.length + 1));
    }, 100);
    return () => clearTimeout(timeout);
  }, [text]);
  useEffect(() => {
    const observerCallback= (entries) => {
      entries.map((entry) => {
        // 当元素和viewport相交时，添加类名选择器，触发对应的animation
        if (entry.isIntersecting && entry.target === eleRef.current) {
          setTriggerFadeIn(true);
          // 释放掉observer，减少性能负担
          observer.disconnect();
        }
      });
    };
    const options = {
      rootMargin: "-200px", // 缩小viewport,确定哪时候触发
    };
    let observer = new IntersectionObserver(observerCallback, options);
    observer.observe(eleRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="main-center">
          <div className="welcome blink-cursor">{text}</div>
          <div className="timeline">
            <TimeLine />
          </div>
          <div ref={eleRef} className={triggerFadeIn?"fadeIn":"hide"}>
             <Stack />    
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Home;
