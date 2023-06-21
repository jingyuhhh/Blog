import React from 'react'
import "./Signin.scss"
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Register() {
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
    <h2>Register</h2>
      <div className='center'>
        <div className='content'>
            <input type='text' name="username" onChange={handleChange} placeholder='请输入用户名' required />
          <input type='password' name="psw" onChange={handleChange} placeholder='请输入密码' required />
        </div>
        <button>注册</button>
        <Link to="/Signin">
          <span>已有账户？登录</span>
        </Link>
        
      </div>
    </div>
  )
}

export default Register