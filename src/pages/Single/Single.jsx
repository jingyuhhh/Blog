import React, { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import "./Single.scss"

import { Link, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import MarkdownIt from 'markdown-it';
import attrs from "markdown-it-attrs";


function Single() {
  const [post,setPost] = useState({"title":"aaa"});
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const navigate = useNavigate();
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`http://localhost:8080/api/article/${id}`);
        setPost(res.data[0]);
        
      } catch(error){
        console.log(error);
      }
      
    }
    fetchData();
  },[id])



  async function handleDelete(){
    await axios.get(`https://localhost:8080/api/delete/${id}`);
    navigate("/passage");
  }


  const md=new MarkdownIt();
  md.use(attrs);

// 扩展渲染规则
md.renderer.rules.blockquote_open = function (tokens, idx, options, env, self) {
  const token = tokens[idx];

  // 获取引用层级（根据引用层级来设置左边框的样式）
  const level = token.attrGet('level') || 0;
  const paddingLeft = level * 10+30 +"px" ; // 根据层级计算 padding-left 的值

  return `<blockquote class="custom-blockquote" style="padding: 10px 30px 10px ${paddingLeft}; ">`;
};
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
                <h1 className='title'>{post.title}</h1>
                <div className='content' dangerouslySetInnerHTML={{__html: result}}></div>
                {/* <div className='content'>{post.content}</div> */}
              </div>
              <div className='time'>{post.date}</div>
              
          </div>
      </div>
      </>
  )
}

export default Single