import React from "react";
import Mainsunghun from '../assets/Mainsunghun.png'
import './sunghunMain.scss';

function sunghunMain() {
  return (
    <div className="sunghunMain-frame">
      <img src={Mainsunghun} alt="Mainsunghun" className="Mainsunghun"></img>
    </div>
  );
}

export default sunghunMain;