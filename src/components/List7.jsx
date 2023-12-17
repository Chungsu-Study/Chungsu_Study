import React from "react";
import elipse from '../assets/Ellipse 19.svg';
import Miri from '../assets/miri.png';
import './List7.scss';
import { Link } from 'react-router-dom';

function List() {
  return (
    <div className="list-frame">
      <div className="list-text">강의 목록</div>
      <Link to='/video7' className="list-button7">
        <div className="list-components">
          <div className="list-info-frame">
            <div className="list-info-elipse-frame">
              <img src={elipse} alt="elipse" className="list-info-elipse"></img>
            </div>
            <div className="list-info-subtitle-frame">
              <div className="list-info-subtitle">들뢰즈의 사상에 대하여</div>
            </div>
          </div>
          <div className="list-explain-frame">
            <img src={Miri} alt="Miri" className="Miri"></img>
            <div className="list-explain-discription">
              <div className="list-explain-discription-text">쉬운 독서 <br></br>[이선]</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default List;
