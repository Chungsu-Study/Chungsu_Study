import React from "react";
import elipse from '../assets/Ellipse 19.svg';
import Miri from '../assets/miri.png';
import './List4.scss';
import { Link } from 'react-router-dom';

function List() {
  return (
    <div className="list-frame">
      <div className="list-text">강의 목록</div>
      <Link to='/video4' className="list-button4">
        <div className="list-components">
          <div className="list-info-frame">
            <div className="list-info-elipse-frame">
              <img src={elipse} alt="elipse" className="list-info-elipse"></img>
            </div>
            <div className="list-info-subtitle-frame">
              <div className="list-info-subtitle">임성현 윤리와 사상</div>
            </div>
          </div>
          <div className="list-explain-frame">
            <img src={Miri} alt="Miri" className="Miri"></img>
            <div className="list-explain-discription">
              <div className="list-explain-discription-text">쉽게 끝내는 동양윤리 <br></br>[임성현]</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default List;
