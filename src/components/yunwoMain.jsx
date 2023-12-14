import React from "react";
import Mainyunwo from '../assets/Mainyunwo.png'
import './yunwoMain.scss';

function yunwoMain() {
  return (
    <div className="yunwoMain-frame">
      <img src={Mainyunwo} alt="Mainyunwo" className="Mainyunwo"></img>
    </div>
  );
}

export default yunwoMain;