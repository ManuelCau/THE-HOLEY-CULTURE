import AboutBanner from "../../assets/banners/about.jpg";
import About from "../../assets/SVG/header-banners/ABOUT.svg";

export function HeaderAbout() {
  return (
    <div className="headerBox">
      <img src={About} alt="aboutTitle" className="headerTitle" />
      <img src={AboutBanner} alt="aboutImg" className="imgHeader" />
    </div>
  );
}