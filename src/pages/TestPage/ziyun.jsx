import LogoFrame from "../../components/LogoFrame";
import List from "../../components/List";
import ZiyunMain from "../../components/ziyunMain";
import './ziyun.scss';


function ziyun() {
  return (
    <div className="ziyun-highest-main">
      <LogoFrame></LogoFrame>
      <ZiyunMain></ZiyunMain>
      <List></List>
    </div>
  );
}

export default ziyun;
