import LogoFrame from "../../components/LogoFrame";
import List from "../../components/List";
import LisujinMain from "../../components/LisujinMain";
import './lisujin.scss';


function lisujin() {
  return (
    <div className="lisujin-highest-main">
      <LogoFrame></LogoFrame>
      <LisujinMain></LisujinMain>
      <List></List>
    </div>
  );
}

export default lisujin;
