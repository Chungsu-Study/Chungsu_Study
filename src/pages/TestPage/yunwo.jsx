import LogoFrame from "../../components/LogoFrame";
import List from "../../components/List";
import YunwoMain from "../../components/yunwoMain";
import './yunwo.scss';


function yunwo() {
  return (
    <div className="yunwo-highest-main">
      <LogoFrame></LogoFrame>
      <YunwoMain></YunwoMain>
      <List></List>
    </div>
  );
}

export default yunwo;
