import "./Home.css";
import Navbar from "../Navbar/Navbar";
import imgURL from "./hello.jpg";
import { useEffect, useState } from "react";

function Home() {
    let content="Welcome to my Blog!";
    let [a,setA]=useState("");
    
    let i = 0;
    useEffect(()=>{
      console.log(i);
      let interval=setInterval(() => {
        if(i>=content.length){
          clearInterval(interval);
        }
        else{
          setA(a=>a+content[i]);
          i++;
        }
        
      }, 100);
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
        </div>
      </div>
    </>
  );
}

export default Home;
