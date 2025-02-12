import catchHeader from "../../assets/banners/catch&release.jpg";
import catchAndRelease from "../../assets/SVG/header-banners/CATCH.svg";
export function HeaderCatchAndRelease() {
  return (
    <div className="headerBox">
      <img src={catchAndRelease} alt="C&R" className="headerTitle" />
      <img src={catchHeader} alt="seabass" className="imgHeader" />
    </div>
  );
}
