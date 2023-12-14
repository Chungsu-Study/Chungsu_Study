import React from "react";
import i1 from '../assets/i1.png';
import i2 from '../assets/i2.png';
import i3 from '../assets/i3.png';
import i4 from '../assets/i4.png';
import i5 from '../assets/i5.png';
import i6 from '../assets/i6.png';
import i7 from '../assets/i7.png';
import i8 from '../assets/i8.png';
import i9 from '../assets/i9.png';
import i10 from '../assets/i10.png';
import './Teacher.scss';
import { Link } from 'react-router-dom';


function LisujinMain() {
  return (
    <div className="Teacher-Frame">
        <div className="Teacher-MainText">선생님들</div>
        <div className="Teacher-Role">
            <Link to='/lisujin'><img src={i1} alt="icon" className="i1"></img></Link>
            <Link to='/soyun'><img src={i2} alt="icon" className="i1"></img></Link>
            <Link to='/lisun'><img src={i3} alt="icon" className="i1"></img></Link>
            <Link to='/sunghun'><img src={i4} alt="icon" className="i1"></img></Link>
            <Link to='/yunwo'><img src={i5} alt="icon" className="i1"></img></Link>
            <Link to='/yungteak'><img src={i6} alt="icon" className="i1"></img></Link>
            <Link to='/ziyun'><img src={i7} alt="icon" className="i1"></img></Link>
            <Link to='/yanggun'><img src={i8} alt="icon" className="i1"></img></Link>
            <Link to='/dongil'><img src={i9} alt="icon" className="i1"></img></Link>
            <Link to='/hoyung'><img src={i10} alt="icon" className="i1"></img></Link>
        </div>
    </div>
  );
}

export default LisujinMain;