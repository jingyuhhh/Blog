import React, {useEffect} from 'react'
import * as d3 from 'd3'

function TimeLine() {
  let timeLine;
  let width,height;
  const data = [
    {date: "2019-09", value: "雅礼中学"},
    {date: "2022-09", value: "华中科技大学计算机专业"},
    {date: "2023-04", value: "冰岩团队前端组"},
    {date: "……", value: "未完待续"},
]
  function drawDot(index,item){
    timeLine.append("circle")
        .attr("cx", width*0.2)
        .attr("cy", 100+120*index)
        .attr("r", 7)
        .attr("fill", "#ffffff")
        .attr("stroke", "#e09eb9")
        .attr("stroke-width", 2)
        .style("stroke-opacity", 0)
        .transition()
        .delay(1000*(index+1))
        .style("stroke-opacity", 1);
    timeLine.append("text")
        .transition()
        .delay(1000*(index+1))
        .attr("x", width*0.2+20)
        .attr("y", (100+120*index))
        .attr("dy", ".35em")
        .text(item.date)
        .attr("font-size", "15px")
        .attr("fill", "rgba(0,0,0,0.4)")
    ;
    timeLine.append("text")
        .transition()
        .delay(1100*(index+1))
        .attr("x", width*0.2+20)
        .attr("y", 100+30+120*index)
        .attr("dy", ".35em")
        .text(item.value)
        .attr("font-size", "16px");

  }

  function drawLine(index){
    if(index!==data.length-1){
      timeLine.append("line")
          .attr("x1", width*0.2)
          .attr("y1", 107)
          .attr("x2", width*0.2)
          .attr("y2", 107)
          .transition()
          .delay(1000*(index+1))
          .duration(2000)
          .attr("x1", width*0.2)
          .attr("y1", 107+120*index)
          .attr("x2", width*0.2)
          .attr("y2", 100+120*(index+1))
          .attr("stroke", "#e09eb9")
          .attr("stroke-width", 2);
    }
  }
  function init(){
    for(const [index,item] of data.entries()){
      drawDot(index,item);
      drawLine(index);
    }
  }



  useEffect(() => {
    width = document.getElementById("timeline").clientWidth;
    height = document.getElementById("timeline").clientHeight;
    timeLine = d3.select("#timeline")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
    ;
    init();
    return () => {
        timeLine.remove();//清除副作用，以免打印两次
    }
  },[])

  return (
    <div id="timeline"></div>
  )
}

export default TimeLine