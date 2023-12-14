import React from "react";
import Mainsoyun from '../assets/Mainsoyun.png'
import './soyunMain.scss';

function soyunMain() {
  return (
    <div className="soyunMain-frame">
      <img src={Mainsoyun} alt="Mainsoyun" className="Mainsoyun"></img>
    </div>
  );
}

export default soyunMain;