import React from "react";
import MainLisujin from '../assets/MainLisujin.png'
import './LisujinMain.scss';

function LisujinMain() {
  return (
    <div className="LisujinMain-frame">
      <img src={MainLisujin} alt="MainLisujin" className="MainLisujin"></img>
    </div>
  );
}

export default LisujinMain;