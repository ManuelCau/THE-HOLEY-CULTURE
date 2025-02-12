import depth from "../../assets/banners/depth.jpg";
import depthHeader from "../../assets/SVG/header-banners/DEPTH.svg";

export function HeaderDepth() {
  return (
    <div className="headerBox">
      <img src={depthHeader} alt="depthTitle" className="headerTitle" />
      <img src={depth} alt="depth" className="imgHeader" />
    </div>
  );
}
