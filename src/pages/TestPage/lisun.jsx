import LogoFrame from "../../components/LogoFrame";
import List from "../../components/List";
import LisunMain from "../../components/lisunMain";
import './lisun.scss';


function lisun() {
  return (
    <div className="lisun-highest-main">
      <LogoFrame></LogoFrame>
      <LisunMain></LisunMain>
      <List></List>
    </div>
  );
}

export default lisun;
