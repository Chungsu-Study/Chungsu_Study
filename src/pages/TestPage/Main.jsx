import LogoFrame from "../../components/LogoFrame";
import './Main.scss';
import Mainpicture from "../../components/MainPicture"
import MainAlrimi from "../../components/alrimi"
function Main() {
  return (
    <div className="Main-HighestFrame">
      <LogoFrame></LogoFrame>
      <Mainpicture></Mainpicture>
      <MainAlrimi></MainAlrimi>
    </div>
  );
}

export default Main;