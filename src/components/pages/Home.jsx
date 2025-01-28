import homeVideo from "../../assets/banners/homeVideo.mp4";
import MAP from '../../assets/Background/sfondo-map.svg'
import logoHoley from '../../assets/SVG/Logos/HOLEY-cdd-TRASP-WHITE.svg'

export function Home() {
  return (
    <div className="backgroundMap">
      <div className="homeHeader">
        <img src={logoHoley} alt="cast,dream,discover" className="mainLogo"/>
        <video
          src={homeVideo}
          className="videoHeader"
          autoPlay
          loop
          muted
        ></video>
      </div>
      <img src={MAP} alt="map" />
    </div>
  );
}
