import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Single.scss"
import imgURL from "../Passage/psg1.png";
import { Link } from 'react-router-dom';

function Single() {
  return (
    <>
    <Navbar />
    <div className='single-main'>
        <div className='center'>
            <Link to="/passage">
                <div className='back'>返回</div>
            </Link>
            <div className='passage'>
                <h2 className='title'>11111</h2>
                <div className='content'>不得不感慨一句，现在的孩子压力太大了（虽然我也年纪不大hhh）不得不感慨一句，现在的孩子压力太大了（虽然我也年纪不大hhh）不得不感慨一句，现在的孩子压力太大了（虽然我也年纪不大hhh）不得不感慨一句，现在的孩子压力太大了（虽然我也年纪不大hhh）不得不感慨一句，现在的孩子压力太大了（虽然我也年纪不大hhh）不得不感慨一句，现在的孩子压力太大了（虽然我也年纪不大hhh）</div>
            </div>
            <div className='time'>2023-6-1</div>
            <img src={imgURL} alt='peitu'></img>
        </div>
    </div>
    </>
  )
}

export default Single