import "./Home.css";
import Navbar from "../../component/Navbar/Navbar";
import imgURL from "./hello.jpg";
import { useEffect, useState } from "react";


function Home() {
    let content="Welcome to my Blog!";
    let [a,setA]=useState("");
    const [inter,setInter]=useState(null);
    useEffect(()=>{
      let i=0,b="";
      console.log(i);
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
          <img className="home-img" src={imgURL} alt="hello" />
          <canvas data-engine="three.js r154" ></canvas>
        </div>
      </div>
    </>
  );
}

export default Home;
