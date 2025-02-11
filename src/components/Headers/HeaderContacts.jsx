import contatti from "../../assets/SVG/header-banners/CONTACT.svg";
import contactVideo from "../../assets/banners/contacts.mp4";
export function HeaderContacts() {
  return (
    <div className="headerBox">
      <img src={contatti} alt="contatti" className="headerTitle" />
      <video
        src={contactVideo}
        className="videoHeader"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
}
