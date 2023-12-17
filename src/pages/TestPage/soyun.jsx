import LogoFrame from "../../components/LogoFrame";
import List8 from "../../components/List8";
import SoyunMain from "../../components/soyunMain";
import './soyun.scss';


function soyun() {
  return (
    <div className="soyun-highest-main">
      <LogoFrame></LogoFrame>
      <SoyunMain></SoyunMain>
      <List8></List8>
    </div>
  );
}

export default soyun;
