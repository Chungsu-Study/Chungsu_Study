import LogoFrameDark from "../../components/LogoFrameDark";
import './video.scss';
import Wrapper from "../../components/Wrapper";

function video() {
  return (
    <Wrapper>
        <div className="video-highest-main">
            <LogoFrameDark></LogoFrameDark>
            <p align="middle"><iframe width="1280" height="720" src="https://www.youtube-nocookie.com/embed/470bxFFeTcs?si=b0eZMHAkDDvrJKRP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
        </div>
    </Wrapper>
  );
}

export default video;
