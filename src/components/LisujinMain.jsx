import React from "react";
import MainLisujin from '../assets/MainLisujin.png'
import './LisujinMain.scss';

function LisujinMain() {
  return (
    <div className="LisujinMain-frame">
        <div className="LisujinMain-Picture">
            <img src={MainLisujin} alt="MainLisujin" className="MainLisujin"></img>
        </div>
        <div className="LisujinMain-Title">
            <div className="MainTitle">단독서비스</div>
            <div className="Explain">
                s
                <div className="MainExplain">책임원칙을 책임지는 기말고사 완벽 대비 강의</div>
            </div>
        </div>
    </div>
  );
}

export default LisujinMain;