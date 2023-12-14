import LogoFrame from "../../components/LogoFrame";
import List from "../../components/List";
import SunghunMain from "../../components/sunghunMain";
import './sunghun.scss';


function sunghun() {
  return (
    <div className="sunghun-highest-main">
      <LogoFrame></LogoFrame>
      <SunghunMain></SunghunMain>
      <List></List>
    </div>
  );
}

export default sunghun;
