import React from "react";
import Mainlisun from '../assets/Mainlisun.png'
import './lisunMain.scss';

function lisunMain() {
  return (
    <div className="lisunMain-frame">
      <img src={Mainlisun} alt="Mainlisun" className="Mainlisun"></img>
    </div>
  );
}

export default lisunMain;