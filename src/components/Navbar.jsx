import Logo from "../assets/SVG/Logos/holey-trasp-white.svg";
import InstaLogo from "../assets/SVG/Logos/IG-LOGO.svg";
import YTLogo from "../assets/SVG/Logos/YT-LOGO.svg";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navBar">
      <Link to="/">
        <img src={Logo} alt="Holey" className="HoleyLogo" />
      </Link>
      <div className="linkList">
        <Link to="/About" className="navLink">
          ABOUT
        </Link>
        <Link to="/Lures" className="navLink">
          LURES
        </Link>
        <Link to="/Design" className="navLink">
          DESIGN
        </Link>
        <Link to="/Culture" className="navLink">
          CULTURE
        </Link>
        <Link to="/Contact" className="navLink">
          CONTACT
        </Link>
      </div>
      <div className="socialLogos">
        <Link to="https://www.instagram.com/the_holey_culture/">
          <img src={InstaLogo} alt="instagram" className="socialLogos"/>
        </Link>
        <Link to='https://youtu.be/F9GM6QuDzNs'><img src={YTLogo} alt="YouTube" className="socialLogos"/></Link>
        
      </div>
    </div>
  );
}
