import Logo from "../assets/SVG/Logos/holey-trasp-white.svg";
import { Link } from "react-router-dom";
import InstaLogo from "../assets/SVG/Logos/IG-LOGO.svg";
import YTLogo from "../assets/SVG/Logos/YT-LOGO.svg";

export function Footer() {
  return (
    <div className="footerBox">
     
      <div className="footer">
        <Link to="/">
          <img src={Logo} alt="Holey" className="HoleyLogo" />
        </Link>
        <div>
          <div className="footerLinks">
            <Link to="/">ABOUT</Link>
            <Link to="/">LURES</Link>
            <Link to="/">DESIGN</Link>
            <Link to="/">CULTURE</Link>
            <Link to="/">CONTACT</Link>
          </div>
          <div className="socialFooterLogos">
            <Link to="https://www.instagram.com/the_holey_culture/">
              <img
                src={InstaLogo}
                alt="instagram"
                className="socialFooterLogos"
              />
            </Link>
            <Link to="https://youtu.be/F9GM6QuDzNs">
              <img src={YTLogo} alt="YouTube" className="socialFooterLogos" />
            </Link>
          </div>
        </div>
      </div>
      <p>© 2025 Designed by Manuel Cau, Tutti i diritti riservati.</p>
    </div>
  );
}
