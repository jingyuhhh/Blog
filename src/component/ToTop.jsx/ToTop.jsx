import "./ToTop.scss"
import React from 'react'


function ToTop() {
    function handleToTop(){
        document.documentElement.scrollIntoView({behavior:"smooth"})
        }
    return (
        <div className="btn" onClick={handleToTop}>
            <svg t="1689425636343" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2264" ><path d="M912 992c-118.4-86.4-313.6-361.6-323.2-588.8h217.6L448 32 108.8 403.2h217.6C345.6 476.8 464 908.8 912 992z" p-id="2265"></path></svg>
        </div>
    
  )
}

export default ToTop;