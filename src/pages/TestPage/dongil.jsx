import LogoFrame from "../../components/LogoFrame";
import List from "../../components/List";
import DongilMain from "../../components/dongilMain";
import './dongil.scss';


function dongil() {
  return (
    <div className="dongil-highest-main">
      <LogoFrame></LogoFrame>
      <DongilMain></DongilMain>
      <List></List>
    </div>
  );
}

export default dongil;
