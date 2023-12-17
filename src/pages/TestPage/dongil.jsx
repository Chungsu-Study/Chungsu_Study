import LogoFrame from "../../components/LogoFrame";
import List1 from "../../components/List1";
import DongilMain from "../../components/dongilMain";
import './dongil.scss';


function dongil() {
  return (
    <div className="dongil-highest-main">
      <LogoFrame></LogoFrame>
      <DongilMain></DongilMain>
      <List1></List1>
    </div>
  );
}

export default dongil;
