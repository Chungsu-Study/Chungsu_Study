import LogoFrame from "../../components/LogoFrame";
import List4 from "../../components/List4";
import SunghunMain from "../../components/sunghunMain";
import './sunghun.scss';


function sunghun() {
  return (
    <div className="sunghun-highest-main">
      <LogoFrame></LogoFrame>
      <SunghunMain></SunghunMain>
      <List4></List4>
    </div>
  );
}

export default sunghun;
