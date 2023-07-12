import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import "./Single.scss"
import imgURL from "../Passage/psg1.png";
import { Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import MarkdownIt from 'markdown-it';


function Single() {
  const [post,setPost] = useState({});
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`http://localhost:8888/passage/${postId}`);
        console.log(res.data);
        setPost(res.data);
        
      } catch(error){
        console.log(error);
      }
      
    }
    fetchData();
    
  },[postId])

  const md=new MarkdownIt();
  const result=md.render("# hahaha");

  return (
      <div className='single-main'>
          <div className='center'>
              <Link to="/passage">
                  <div className='back'>返回</div>
              </Link>
              <div className='passage'>
                  <h2 className='title'>{post.title}</h2>
                  <div className='content' dangerouslySetInnerHTML={{__html: result}}></div>
              </div>
              <div className='time'>{post.time}</div>
              <img src={imgURL} alt='peitu'></img>
          </div>
      </div>
  )
}

export default Single