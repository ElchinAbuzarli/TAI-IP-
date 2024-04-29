import Image from "next/image";
import "./footer.scss";
import Logo from "../../assets/logo.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <section className="footer-container">
      <div className="footer-wrapper">
        <div className="foot-left">
          <Image src={Logo} alt="Logo" width={220} height={40} />

          <div className="community">
            <h1 className="community-title">Community</h1>

            <div className="footlinks">
              <Link
                className="footlink"
                href="https://github.com/ElchinAbuzarli"
              >
                <FontAwesomeIcon icon={faGithub} />
                Github
              </Link>

              <Link
                className="footlink"
                href="https://www.linkedin.com/in/elchin-abuzarli-6769b427a/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                LinkedIn
              </Link>

              <Link
                className="footlink"
                href="https://www.instagram.com/elcin_abuzerli?igsh=MWY3dm4wNWxxY3c2eQ=="
              >
                <FontAwesomeIcon icon={faInstagram} />
                Instagram
              </Link>
            </div>
          </div>
        </div>

        <div className="foot-right">
          <h1>Learning about me</h1>
          <div className="contacta">

            <Link className="foot-cont" href="mailto:laletech4@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
              abuzerli.dev@gmail.com
            </Link>

            <Link className="foot-cont" href="tel:+994-51-840-40-02">
              <FontAwesomeIcon icon={faPhone} />
              (+994) 51 840 40 02
            </Link>

          </div>
        </div>
      </div>
      <span className="copyright">© Abuzarli 2024 Inc. All rights reserved</span>
    </section>
  );
}

export default Footer;
