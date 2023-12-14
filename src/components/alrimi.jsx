import React from "react";
import './alrimi.scss';
import Rectangle from '../assets/Rectangle.svg'

function LisujinMain() {
  return (
    <div className="alrimi-main">
      <div className="alrimi-frame">
          <div className="alrimi-maintext">알리미 및 공지</div>
          <div className="alrimi-box1">
            <img src={Rectangle} alt="Rectangle" className="RectangleLeft"></img>
          </div>

          <a href="http://www.ccs.caehs.kr/schdList.do?m=0211&s=ccs" className="alrimi-subtext">청수고등학교 학사일정안내</a>
          <a href="http://www.ccs.caehs.kr/boardCnts/updateCnt.do?boardID=120236&viewBoardID=120236&boardSeq=31207769&lev=0&action=view&searchType=null&srch2=null&s=ccs&statusYN=W&page=1" className="alrimi-subtext">2023 학부모와 함께하는 진로진학학습상담캠프 1차, 2차 진행</a>
          <a href="http://www.ccs.caehs.kr/boardCnts/updateCnt.do?boardID=120236&viewBoardID=120236&boardSeq=31205776&lev=0&action=view&searchType=null&srch2=null&s=ccs&statusYN=W&page=1" className="alrimi-subtext">천안청수고등학교 학교신문 청수의 오늘 1호가 발간되었습니다.</a>
          <a href="http://www.ccs.caehs.kr/boardCnts/updateCnt.do?boardID=120236&viewBoardID=120236&boardSeq=31188864&lev=0&action=view&searchType=null&srch2=null&s=ccs&statusYN=W&page=1" className="alrimi-subtext">2023학년도 학교교육과정 운영계획</a>
          <div className="alrimi-box2">
            <img src={Rectangle} alt="Rectangle" className="RectangleLeft"></img>
          </div>
      </div>
      <div className="alrimi-warn">
        <div className="alrimi-WarnMainText">안내사항</div>
        <div className="alrimi-WarnSubText">청수스터디의 모든 영상자료는<br /> 복제, 저장, 유출 및 공유가 <br />금지되어 있으며, <br />이를 어길시 불법입니다.</div>
      </div>
    </div>
  );
}

export default LisujinMain;