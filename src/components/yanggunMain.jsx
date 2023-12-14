import React from "react";
import Mainyanggun from '../assets/Mainyanggun.png'
import './yanggunMain.scss';

function yanggunMain() {
  return (
    <div className="yanggunMain-frame">
      <img src={Mainyanggun} alt="Mainyanggun" className="Mainyanggun"></img>
    </div>
  );
}

export default yanggunMain;