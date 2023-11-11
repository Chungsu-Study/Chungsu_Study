import React from "react";
import elipse from '../assets/Ellipse 19.svg'
import './List.scss';


function List() {
  return (
    <div className="list-frame">
      <div className="list-text">강의 목록</div>
      <div className="list-button">
        <div className="list-components">
          <div className="list-info-frame">
            <div className="list-info-elipse-frame">
              <img src={elipse} alt="elipse" className="list-info-elipse"></img>
            </div>
            <div className="list-info-subtitle-frame">
              <div className="list-info-subtitle">단독서비스</div>
            </div>
          </div>
          <div className="list-explain-frame">
            <div className="list-explain-TestVideo">
              <div className="list-explain-TestVideo-text">미리보기</div>
            </div>
            <div className="list-explain-discription">
              <div className="list-explain-discription-text">책임원칙을 책임지는 기말고사 완벽 대비 강의 <br></br>[범위:불법행위를 억제할 수 있는 책임원칙]</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
