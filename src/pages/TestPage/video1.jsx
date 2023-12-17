import LogoFrameDark from "../../components/LogoFrameDark";
import './video.scss';
import Wrapper from "../../components/Wrapper";

function video() {
  return (
    <Wrapper>
        <div className="video-highest-main">
            <LogoFrameDark></LogoFrameDark>
            <p align="middle"><iframe width="1280" height="720" src="https://www.youtube-nocookie.com/embed/G0g2gSg928Q?si=X8aR1oyiUZH33wTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
        </div>
    </Wrapper>
  );
}

export default video;
