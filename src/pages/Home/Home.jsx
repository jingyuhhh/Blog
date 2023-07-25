import "./Home.scss";
import Navbar from "../../component/Navbar/Navbar";
import { useEffect, useState } from "react";
import TimeLine from "./TimeLine";


function Home() {
    let content="Welcome to my Blog!";
    let [a,setA]=useState("");
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

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="main-center">
          <div className="welcome">{a}</div>
          <div className="timeline">
            <TimeLine />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
