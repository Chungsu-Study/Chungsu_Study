import LogoFrame from "../../components/LogoFrame";
import './Main.scss';
import Mainpicture from "../../components/MainPicture"
import Wrapper from "../../components/Wrapper";
import MainAlrimi from "../../components/alrimi"
function Main() {
  return (
    <Wrapper>
      <div className="Main-HighestFrame">
        <LogoFrame></LogoFrame>
        <Mainpicture></Mainpicture>
        <MainAlrimi></MainAlrimi>
      </div>
    </Wrapper>
  );
}

export default Main;