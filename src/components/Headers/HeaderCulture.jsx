import Culture from "../../assets/SVG/header-banners/CULTURE.svg";
import CultureBanner from "../../assets/banners/CULTURE.mp4";

export function HeaderCulture() {
  return (
    <div className="headerBox">
      <img src={Culture} alt="cultureTitle" className="headerTitle" />
      <video
        src={CultureBanner}
        className="videoHeader"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
}
