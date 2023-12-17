import LogoFrame from "../../components/LogoFrame";
import Teacher from "../../components/Teacher";
import Wrapper from "../../components/Wrapper";
import './Teachers.scss';
function Main() {
  return (
    <Wrapper>
      <div className="Teachers-HighestFrame">
        <LogoFrame></LogoFrame>
        <Teacher></Teacher>
      </div>
    </Wrapper>
    
  );
}

export default Main;