import React from "react";
import MainDongil from '../assets/Maindongil.png'
import './dongilMain.scss';

function dongilMain() {
  return (
    <div className="dongilMain-frame">
      <img src={MainDongil} alt="Maindongil" className="Maindongil"></img>
    </div>
  );
}

export default dongilMain;