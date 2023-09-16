import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <div className="media_icons">
        <FontAwesomeIcon icon={faFacebook} size="2x" className="social_icon" />
        <FontAwesomeIcon icon={faInstagram} size="2x" className="social_icon" />
        <FontAwesomeIcon icon={faTwitter} size="2x" className="social_icon" />
        <FontAwesomeIcon icon={faYoutube} size="2x" className="social_icon" />
      </div>
      <div className="usage_statement">
        <h2>Condition of use</h2>
        <h2>Piracy & policy</h2>
        <h2>Press Room</h2>
      </div>
      <h2> &#169; 2021 MovieBox developed by Ganiyu Olalekan Fatai</h2>
    </div>
  );
}

export default Footer;
