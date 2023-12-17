import React from "react";
import elipse from '../assets/Ellipse 19.svg';
import Miri from '../assets/miri.png';
import './List8.scss';
import { Link } from 'react-router-dom';

function List() {
  return (
    <div className="list-frame">
      <div className="list-text">강의 목록</div>
      <Link to='/video8' className="list-button8">
        <div className="list-components">
          <div className="list-info-frame">
            <div className="list-info-elipse-frame">
              <img src={elipse} alt="elipse" className="list-info-elipse"></img>
            </div>
            <div className="list-info-subtitle-frame">
              <div className="list-info-subtitle">이것만 봐봐</div>
            </div>
          </div>
          <div className="list-explain-frame">
            <img src={Miri} alt="Miri" className="Miri"></img>
            <div className="list-explain-discription">
              <div className="list-explain-discription-text">존재론적 환원주의와 반론에 대한 기말고사 대비 <br></br>[한소윤]</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default List;
