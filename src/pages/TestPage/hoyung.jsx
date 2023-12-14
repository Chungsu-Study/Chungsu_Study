import LogoFrame from "../../components/LogoFrame";
import List from "../../components/List";
import HoyungMain from "../../components/hoyungMain";
import './hoyung.scss';


function hoyung() {
  return (
    <div className="hoyung-highest-main">
      <LogoFrame></LogoFrame>
      <HoyungMain></HoyungMain>
      <List></List>
    </div>
  );
}

export default hoyung;
