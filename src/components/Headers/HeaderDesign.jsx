import Design from "../../assets/SVG/header-banners/DESIGN.svg";
import DesignBanner from "../../assets/banners/design.jpg";
export function HeaderDesign() {
  return (
    <div className="headerBox">
      <img src={Design} alt="DesignTitle" className="headerTitle" />
      <img src={DesignBanner} alt="designImg" className="imgHeader" />
    </div>
  );
}
