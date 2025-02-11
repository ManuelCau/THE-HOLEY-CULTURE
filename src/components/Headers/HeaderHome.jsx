import homeVideo from "../../assets/banners/homeVideo.mp4";
import logoHoley from "../../assets/SVG/Logos/HOLEY-cdd-TRASP-WHITE.svg";

export function HeaderHome() {
  return (
    <div className="homeHeader">
      <img
        src={logoHoley}
        alt="cast,dream,discover"
        className="mainLogo"
        loading="lazy"
      />
      <video
        src={homeVideo}
        className="videoHeader"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
}
