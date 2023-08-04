import React from 'react'
import sass from "../../../assets/sass.svg";
import koa from "../../../assets/koa.svg";
import react from "../../../assets/react.svg";
import mysql from "../../../assets/mysql.svg";
import D3 from "../../../assets/D3.jpg";
import "../../Home/Home.scss";

function Stack() {
  return (
    <div>
        <h3 >本站搭建没有用任何模板，用到的技术栈如下</h3>
        <div className="stack">
            <img src={sass} alt="sass" />
            <img src={koa} alt="koa" />
            <img src={react} alt="react" />
            <img src={mysql} alt="mysql" />
            <img src={D3} alt="D3" />
        </div>
    </div>

  )
}

export default Stack