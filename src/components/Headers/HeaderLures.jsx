import Lures from '../../assets/SVG/header-banners/LURES.svg'
import LuresBanner from '../../assets/banners/LURES.jpg'

export function HeaderLures() {
  return (
    <div className="headerBox">
      <img src={Lures} alt="LuresTitle" className="headerTitle" />
      <img src={LuresBanner} alt="luresImg" className="imgHeader" />
    </div>
  );
}