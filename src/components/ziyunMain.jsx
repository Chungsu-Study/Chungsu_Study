import React from "react";
import Mainziyun from '../assets/Mainziyun.png'
import './ziyunMain.scss';

function ziyunMain() {
  return (
    <div className="ziyunMain-frame">
      <img src={Mainziyun} alt="Mainziyun" className="Mainziyun"></img>
    </div>
  );
}

export default ziyunMain;