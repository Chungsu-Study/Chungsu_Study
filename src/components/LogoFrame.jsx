import React from "react";
import icon from '../assets/icon.svg';
import Instagram from '../assets/Instagram.png';
import './LogoFrame.scss';
import { Link } from 'react-router-dom';

function LogoFrame() {
  return (
    <div className="logo-frame">
      <div className="logo-top">
        <img src={Instagram} alt="InstagramIcon" className="Instagram"></img>
        <div className="Gimalday">청수고 기말고사 D-0</div>
      </div>
      <Link to='/'><img src={icon} alt="test" className="Icon"></img></Link>
      <div className="logo-bottom">
        <div className="logo-teacher">
          <a href="https://youtube.com/" className="Main-bold">선생님</a>
        </div>
        <div className="logo-announce">
          <a href="https://youtube.com/" className="Main-bold">공지</a>
        </div>
        <div className="logo-school">
          <a href="https://youtube.com/" className="Main-bold">학교소식</a>
        </div>
        <div className="logo-credit">
          <a href="https://youtube.com/" className="Main-bold">크레딧</a>
        </div>
      </div>
    </div>
  );
}

export default LogoFrame;
