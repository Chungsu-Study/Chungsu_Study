import React from "react";
import Mainhoyung from '../assets/Mainhoyung.png'
import './hoyungMain.scss';

function hoyungMain() {
  return (
    <div className="hoyungMain-frame">
      <img src={Mainhoyung} alt="Mainhoyung" className="Mainhoyung"></img>
    </div>
  );
}

export default hoyungMain;