import LogoFrame from "../../components/LogoFrame";
import List from "../../components/List";
import YanggunMain from "../../components/yanggunMain";
import './yanggun.scss';


function yanggun() {
  return (
    <div className="yanggun-highest-main">
      <LogoFrame></LogoFrame>
      <YanggunMain></YanggunMain>
      <List></List>
    </div>
  );
}

export default yanggun;
