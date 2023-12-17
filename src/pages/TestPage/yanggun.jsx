import LogoFrame from "../../components/LogoFrame";
import List3 from "../../components/List3";
import YanggunMain from "../../components/yanggunMain";
import './yanggun.scss';


function yanggun() {
  return (
    <div className="yanggun-highest-main">
      <LogoFrame></LogoFrame>
      <YanggunMain></YanggunMain>
      <List3></List3>
    </div>
  );
}

export default yanggun;
