import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import "./Single.scss"
import imgURL from "../Passage/psg1.png";
import { Link, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import MarkdownIt from 'markdown-it';


function Single() {
  const [post,setPost] = useState({"title":"aaa"});
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const navigate = useNavigate();
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`http://localhost:8888/api/article/${id}`);
        setPost(res.data[0]);
        
      } catch(error){
        console.log(error);
      }
      
    }
    fetchData();
  },[id])



  async function handleDelete(){
    await axios.get(`http://localhost:8888/api/delete/${id}`);
    navigate("/passage");
  }


  const md=new MarkdownIt();
  const result=md.render(`${post.content}`);

  return (
    <>
    <Navbar />
      <div className='single-main'>
          <div className='center'>
              <Link to="/passage">
                  <div className='back'>返回</div>
              </Link>
              <div className='delete' onClick={handleDelete}>删除</div>
              <div className='passage'>
                <h2 className='title'>{post.title}</h2>
                <div className='content' dangerouslySetInnerHTML={{__html: result}}></div>
                {/* <div className='content'>{post.content}</div> */}
              </div>
              <div className='time'>{post.date}</div>
              <img src={imgURL} alt='peitu'></img>
              
          </div>
      </div>
      </>
  )
}

export default Single