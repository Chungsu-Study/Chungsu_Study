import LogoFrame from "../../components/LogoFrame";
import List from "../../components/List";
import SoyunMain from "../../components/soyunMain";
import './soyun.scss';


function soyun() {
  return (
    <div className="soyun-highest-main">
      <LogoFrame></LogoFrame>
      <SoyunMain></SoyunMain>
      <List></List>
    </div>
  );
}

export default soyun;
