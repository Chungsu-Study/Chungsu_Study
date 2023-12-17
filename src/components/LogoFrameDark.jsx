import React from "react";
import darkicon from '../assets/darkicon.svg';
import DarkInstagram from '../assets/DarkInstagram.png';
import './LogoFrameDark.scss';
import { Link } from 'react-router-dom';

function LogoFrameDark() {
  return (
    <div className="dlogo-frame">
      <div className="logo-top">
        <img src={DarkInstagram} alt="InstagramIcon" className="Instagram"></img>
        <div className="DarkGimalday">청수고 기말고사 D-0</div>
      </div>
      <Link to='/'><img src={darkicon} alt="test" className="Icon"></img></Link>
      <div className="logo-bottom">
        <div className="logo-teacher">
          <Link to='/teachers' className="Main-bold">선생님</Link>
        </div>
        <div className="logo-announce">
          <a href="http://www.ccs.caehs.kr/boardCnts/list.do?boardID=120235&m=0201&s=ccs" className="Main-bold">공지</a>
        </div>
        <div className="logo-school">
          <a href="http://www.ccs.caehs.kr/boardCnts/list.do?boardID=120236&m=0202&s=ccs" className="Main-bold">학교소식</a>
        </div>
        <div className="logo-credit">
          <a href="https://youtube.com/" className="Main-bold">크레딧</a>
        </div>
      </div>
    </div>
  );
}

export default LogoFrameDark;
