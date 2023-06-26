import React, { useState } from 'react'
import "./Signin.scss"
import { Link } from 'react-router-dom'

function Signin() {
  const [input,setInput]=useState({
    username:"",
    psw:""

  })
  const handleChange = (e)=>{
    setInput((prev)=>(
      {
        ...prev, [e.target.name]:e.target.value
      }
    ));
  }

  return (
    <div className='sign-bg'> 
    <h2>Login</h2>
    <Link to="/">
      <div className='back'>返回<br></br>首页</div>
    </Link>
      <div className='center'>
        <div className='content'>
          <input type='text' name="username" onChange={handleChange} placeholder='请输入用户名' required  />
          <input type='password' name="psw" onChange={handleChange} placeholder='请输入密码' required />
        </div>
        <button>登录</button>
        <Link to="/register">
          <span>没有账号? 注册</span>
        </Link>
        
      </div>
    </div>
  )
}

export default Signin