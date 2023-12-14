import React from "react";
import chungsu from '../assets/chungsu.jpg'
import './MainPicture.scss';

function LisujinMain() {
  return (
    <div className="Picture-Frame">
      <img src={chungsu} alt="MainPicture" className="Picture"></img>
    </div>
  );
}

export default LisujinMain;