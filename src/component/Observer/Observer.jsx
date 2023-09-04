import { useRef } from "react";
import { useEffect, useState } from "react";
import React from 'react'

function Observer({children}) {
    const eleRef = useRef();
    const height = useRef();
    const width = useRef();
    const [triggerFadeIn, setTriggerFadeIn] = useState(false);
    const screenHeight = window.innerHeight;
    useEffect(() => {
        const observerCallback= (entries) => {
          entries.map((entry) => {
            // 当元素和viewport相交时，添加类名选择器，触发对应的animation
            if (entry.isIntersecting && entry.target === eleRef.current) {
              setTriggerFadeIn(true);
            }
          });
        };
        const options = {
          rootMargin:  `-${screenHeight*0.2}px 0px -${screenHeight*0.2}px 0px`,
        };
        let observer = new IntersectionObserver(observerCallback, options);
        observer.observe(eleRef.current);
    
        return () => {
          observer.disconnect();
        };
      }, []);
      useEffect(() => {
        height.current = eleRef.current.firstChild.clientHeight;
        width.current = eleRef.current.firstChild.clientWidth;
      })
    return (
        <div ref={eleRef} className={triggerFadeIn?"fadeIn":"hide"} style={{height:height,width:width}}>
          {children}
        </div>
    )
}

export default Observer