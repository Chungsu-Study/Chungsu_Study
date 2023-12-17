import React from "react";
import elipse from '../assets/Ellipse 19.svg';
import Miri from '../assets/miri.png';
import './List1.scss';
import { Link } from 'react-router-dom';

function List() {
  return (
    <div className="list-frame">
      <div className="list-text">강의 목록</div>
      <Link to='/video1' className="list-button1">
        <div className="list-components">
          <div className="list-info-frame">
            <div className="list-info-elipse-frame">
              <img src={elipse} alt="elipse" className="list-info-elipse"></img>
            </div>
            <div className="list-info-subtitle-frame">
              <div className="list-info-subtitle">화학타임</div>
            </div>
          </div>
          <div className="list-explain-frame">
            <img src={Miri} alt="Miri" className="Miri"></img>
            <div className="list-explain-discription">
              <div className="list-explain-discription-text">통합과학 산화,환원을 바탕으로 하는 쉬운강의 <br></br>[최동길]</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default List;
