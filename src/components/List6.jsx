import React from "react";
import elipse from '../assets/Ellipse 19.svg';
import Miri from '../assets/miri.png';
import './List6.scss';
import { Link } from 'react-router-dom';

function List() {
  return (
    <div className="list-frame">
      <div className="list-text">강의 목록</div>
      <Link to='/video6' className="list-button6">
        <div className="list-components">
          <div className="list-info-frame">
            <div className="list-info-elipse-frame">
              <img src={elipse} alt="elipse" className="list-info-elipse"></img>
            </div>
            <div className="list-info-subtitle-frame">
              <div className="list-info-subtitle">세계지리 완전 정리</div>
            </div>
          </div>
          <div className="list-explain-frame">
            <img src={Miri} alt="Miri" className="Miri"></img>
            <div className="list-explain-discription">
              <div className="list-explain-discription-text">기말고사 세계지리 어렵지 않습니다 <br></br>[송호영]</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default List;
