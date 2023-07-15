import React, { useState } from 'react'
import Navbar from '../../component/Navbar/Navbar';
import "./Edit.css";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';



function Edit() {
  const state=useLocation().state;
  let catgory=["生活杂谈","学习笔记","读书笔记"];
  let [title,setTitle]=useState(state?.title||"");
  let [content,setContent]=useState(state?.content||"");
  let [cat,setCat]=useState(state?.cat||"");
  let [img,setImg] = useState(state?.img||"");
  const navigate=useNavigate();

  const handleClick = async()=>{

    try {
      await axios.post(`http://localhost:8080/api/add`,{
        title,
        content,
        cat,
        date:moment(Date.now()).format("YYYY-MM-DD"),

      },{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

    } catch (error) {
      console.log(error);
    }
    // navigate("/passage");
  }

  return (
    <>
    <Navbar />
    <div className='editcontent'>
        <div className="editcontainer">
          <div className='editcontainer-main'>
            <h2>标题</h2>
            <input type='text' placeholder='Title'  className='edittitle' onChange={(e)=>{
              setTitle(e.target.value);

              }}></input>
            <h2>正文</h2>
            <textarea type="text" className='editor' onInput={(e)=>{
              setContent(e.target.value)
            }} ></textarea>
            <h2>图片</h2>
            <input type='file' multiple onInput={(e)=>{
              setImg(e.target.files)
            }}></input>
          </div>
            
          <form className='editform'>
            <h1>Category</h1>
            {catgory.map((item)=>(
              <>
              <input type='radio' name="cat" key={item} id={item} value={item} onClick={(e)=>{
                setCat(e.target.value);
              }} />
              <label htmlFor={item}>{item}</label>
              <br></br>
              </>
            ))}

          </form>
        </div>
        <div className="edit-action">
          <Link to="/passage">
            <button className='edit-button edit-leave'>取消</button>
            
          </Link>
          <button className='edit-button' onClick={handleClick}>提交</button>
        </div>
    </div>
    

    </>
  )
}

export default Edit;