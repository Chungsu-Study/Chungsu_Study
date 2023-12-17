import LogoFrame from "../../components/LogoFrame";
import List9 from "../../components/List9";
import ZiyunMain from "../../components/ziyunMain";
import './ziyun.scss';


function ziyun() {
  return (
    <div className="ziyun-highest-main">
      <LogoFrame></LogoFrame>
      <ZiyunMain></ZiyunMain>
      <List9></List9>
    </div>
  );
}

export default ziyun;
